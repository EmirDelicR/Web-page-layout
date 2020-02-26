<template>
  <div class="pages-stack">
    <div class="page" id="page_1">
      <span class="page-name">{{ $t(`nav-bar.page`) }}</span>
      <Page1 v-if="isCurrentPage('page_1')" />
    </div>
    <div class="page" id="page_2">
      <span class="page-name">{{ $t(`nav-bar.page`) }}</span>
      <Page2 v-if="isCurrentPage('page_2')" />
    </div>
    <div class="page" id="page_3">
      <span class="page-name">{{ $t(`nav-bar.page`) }}</span>
      <Page3 v-if="isCurrentPage('page_3')" />
    </div>
    <div class="page" id="page_4">
      <span class="page-name">{{ $t(`nav-bar.page`) }}</span>
      <Page4 v-if="isCurrentPage('page_4')" />
    </div>
    <div class="page" id="page_5">
      <span class="page-name">{{ $t(`nav-bar.page`) }}</span>
      <Page5 v-if="isCurrentPage('page_5')" />
    </div>
    <div class="page" id="page_6">
      <span class="page-name">{{ $t(`nav-bar.page`) }}</span>
      <Page6 v-if="isCurrentPage('page_6')" />
    </div>
    <div class="page" id="page_7">
      <span class="page-name">{{ $t(`nav-bar.page`) }}</span>
      <Page7 v-if="isCurrentPage('page_7')" />
    </div>
  </div>
</template>

<script>
import {
  endTransitionHandler,
  getStackPages,
  buildPageStack
} from "@/utils/menuHelpers";

import { lazyLoadPage } from "@/utils/helpers";

const Page1 = lazyLoadPage("Page_1");
const Page2 = lazyLoadPage("Page_2");
const Page3 = lazyLoadPage("Page_3");
const Page4 = lazyLoadPage("Page_4");
const Page5 = lazyLoadPage("Page_5");
const Page6 = lazyLoadPage("Page_6");
const Page7 = lazyLoadPage("Page_7");

export default {
  components: {
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7
  },
  data() {
    return {
      stack: null,
      menuButton: null,
      nav: null,
      isMenuOpen: false,
      current: 0,
      numberOfPages: 0,
      pages: null,
      currentPage: "page_1"
    };
  },
  mounted() {
    this.stack = document.querySelector(".pages-stack");
    this.menuButton = document.querySelector("button.menu-button");
    this.nav = document.querySelector(".pages-nav");

    this.init();
  },
  methods: {
    init() {
      this.pages = [...this.stack.children];
      this.numberOfPages = this.pages.length;

      buildPageStack(this.current, this.numberOfPages, this.pages);
      this.initEvents();
    },

    initEvents() {
      const navItems = [...this.nav.querySelectorAll(".link--page")];
      this.menuButton.addEventListener("click", this.toggleMenu);

      navItems.forEach(item => {
        const pageid = item.getAttribute("href").slice(1);
        item.addEventListener("click", ev => {
          ev.preventDefault();
          this.openPage(pageid);
        });
      });

      this.pages.forEach(page => {
        const pageid = page.getAttribute("id");
        page.addEventListener("click", ev => {
          if (this.isMenuOpen) {
            ev.preventDefault();
            this.openPage(pageid);
          }
        });
      });
    },

    openPage(id) {
      const pageToOpen = id
        ? document.getElementById(id)
        : this.pages[this.current];

      const newPage = this.pages.indexOf(pageToOpen);
      const stackPages = getStackPages(
        this.current,
        this.numberOfPages,
        newPage
      );

      pageToOpen.style.transform = "translate3d(0, 0, 0)";
      pageToOpen.style.opacity = 1;

      stackPages.forEach(pageIndex => {
        const page = this.pages[pageIndex];
        page.style.transform = "translate3d(0,100%,0)";
      });

      if (id) {
        this.current = newPage;
        this.currentPage = id;
      }

      this.addRemoveClass(false);

      endTransitionHandler(pageToOpen, () => {
        this.stack.classList.remove("pages-stack--open");
        buildPageStack(this.current, this.numberOfPages, this.pages);
        this.isMenuOpen = false;
      });
    },

    openMenu() {
      this.isMenuOpen = true;
      this.addRemoveClass(true);
      this.stack.classList.add("pages-stack--open");
      const stackPages = getStackPages(this.current, this.numberOfPages);

      stackPages.forEach((pageIndex, index) => {
        const page = this.pages[pageIndex];
        const translationValue = parseInt(-1 * 200 - 50 * index);
        page.style.transform = `translate3d(0, 75%, ${translationValue}px)`;
      });
    },

    closeMenu() {
      this.openPage();
    },

    addRemoveClass(add) {
      if (add) {
        this.menuButton.classList.add("menu-button--open");
        this.nav.classList.add("pages-nav--open");
      } else {
        this.menuButton.classList.remove("menu-button--open");
        this.nav.classList.remove("pages-nav--open");
      }
    },

    toggleMenu() {
      this.isMenuOpen ? this.closeMenu() : this.openMenu();
    }
  },
  computed: {
    isCurrentPage() {
      return page => this.currentPage === page;
    }
  }
};
</script>
