const DIV_CLASS = 'pages-nav__item';
const LINK_PAGE_CLASS = 'link link--page';
const LINK_SOCIAL_CLASS = 'link link--social link--faded';

const NORMAL_PAGES = [
  { name: 'page_1', divClass: DIV_CLASS, linkClass: LINK_PAGE_CLASS },
  {
    name: 'page_2',
    divClass: DIV_CLASS,
    linkClass: LINK_PAGE_CLASS
  },
  { name: 'page_3', divClass: DIV_CLASS, linkClass: LINK_PAGE_CLASS },
  {
    name: 'page_4',
    divClass: DIV_CLASS,
    linkClass: LINK_PAGE_CLASS
  },
  {
    name: 'page_5',
    divClass: DIV_CLASS,
    linkClass: LINK_PAGE_CLASS
  },
  { name: 'page_6', divClass: DIV_CLASS, linkClass: LINK_PAGE_CLASS }
];

const SMALL_PAGES = [
  {
    name: 'page_7',
    divClass: `${DIV_CLASS} ${DIV_CLASS}--small`,
    linkClass: `${LINK_PAGE_CLASS} link--faded`
  }
];

const SOCIAL_PAGES = [
  {
    name: 'git',
    icon: 'fab fa-github',
    link: '',
    social: true,
    divClass: `${DIV_CLASS} ${DIV_CLASS}--social`,
    linkClass: LINK_SOCIAL_CLASS
  },
  {
    name: 'linkedin',
    icon: 'fab fa-linkedin-in',
    link: '',
    social: true,
    divClass: `${DIV_CLASS} ${DIV_CLASS}--social`,
    linkClass: LINK_SOCIAL_CLASS
  },
  {
    name: 'xing',
    icon: 'fab fa-xing',
    link: '',
    social: true,
    divClass: `${DIV_CLASS} ${DIV_CLASS}--social`,
    linkClass: LINK_SOCIAL_CLASS
  },
  {
    name: 'cv',
    icon: 'fas fa-file-download',
    link: require('@/assets/doc/CV.pdf'),
    social: true,
    divClass: `${DIV_CLASS} ${DIV_CLASS}--social`,
    linkClass: LINK_SOCIAL_CLASS,
    download: 'CV.pdf'
  }
];

export { NORMAL_PAGES, SOCIAL_PAGES, SMALL_PAGES };
