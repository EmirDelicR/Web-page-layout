/**
 * Add - remove transition event from HTML element
 * @param {HTMLElement} el
 * @param {Function} callback
 */
const endTransitionHandler = (el, callback) => {
  const onEndCallbackFn = ev => {
    if (ev.target != el) return;
    el.removeEventListener('transitionend', onEndCallbackFn);

    if (callback && typeof callback === 'function') {
      callback();
    }
  };

  el.addEventListener('transitionend', onEndCallbackFn);
};

/**
 *
 * Gets the current stack pages indexes.
 * If any of them is the exclude then this
 * one is not part of the returned array
 *
 * @param {Number} current  Current page index
 * @param {Number} pages Number of pages
 * @param {Number} exclude Page index to exclude
 */

const getStackPages = (current, pages, exclude = null) => {
  const firstPage = current + 1 < pages ? current + 1 : 0;
  const secondPage = current + 2 < pages ? current + 2 : 1;

  const pageIndexes = [];

  if (exclude != current) {
    pageIndexes.push(current);
  }

  if (exclude != firstPage) {
    pageIndexes.push(firstPage);
  }

  if (exclude != secondPage) {
    pageIndexes.push(secondPage);
  }

  return pageIndexes;
};

/**
 * Build page stack when press nav button
 * @param {Number} current Current page index
 * @param {Number} numberOfPages
 * @param {Array} pages Array of HTML elements
 */
const buildPageStack = (current, numberOfPages, pages) => {
  const stackPages = getStackPages(current, numberOfPages);

  /**
   * set z-index, opacity, initial transforms to pages
   * and add class page--inactive to all except the current one
   * */
  for (let i = 0; i < numberOfPages; ++i) {
    let page = pages[i];
    let position = stackPages.indexOf(i);

    if (current !== i) {
      page.classList.add('page--inactive');
      page.style.transform = getTransformValue(position);
    } else {
      page.classList.remove('page--inactive');
    }

    page.style.zIndex =
      i < current
        ? parseInt(current - i)
        : parseInt(numberOfPages + current - i);

    page.style.opacity = getOpacityValue(position, page);
  }
};

export { endTransitionHandler, getStackPages, buildPageStack };

/**
 *
 * @param {Number} pos - page position
 * @return {String} - CSS translate3d property
 */
const getTransformValue = pos => {
  return pos !== -1 ? 'translate3d(0,100%,0)' : 'translate3d(0,75%,-300px)';
};

/**
 *
 * @param {Number} pos - page position
 * @return {Float} - opacity value
 */
const getOpacityValue = pos => {
  return pos !== -1 ? parseFloat(1 - 0.1 * pos) : 0;
};
