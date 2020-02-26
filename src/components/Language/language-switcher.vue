<template>
  <div class="language-wrapper">
    <div class="scene">
      <div class="cube">
        <div
          @click="changeLanguage({ lang: 'de', side: 'right' })"
          class="cube__face cube__face--front"
        >
          EN
        </div>
        <div
          @click="changeLanguage({ lang: 'en', side: 'front' })"
          class="cube__face cube__face--back"
        >
          BS
        </div>
        <div
          @click="changeLanguage({ lang: 'bs', side: 'back' })"
          class="cube__face cube__face--right"
        >
          DE
        </div>
        <div class="cube__face cube__face--left">-</div>
        <div class="cube__face cube__face--top">-</div>
        <div class="cube__face cube__face--bottom">-</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'languageSwitch',
  data() {
    return {
      currentClass: '',
      cube: null
    };
  },
  mounted() {
    this.cube = document.querySelector('.cube');
  },
  methods: {
    changeLanguage(data) {
      this.$i18n.locale = data.lang;
      const showClass = `show-${data.side}`;
      if (this.currentClass !== '') {
        this.cube.classList.remove(this.currentClass);
      }
      this.cube.classList.add(showClass);
      this.currentClass = showClass;
    }
  }
};
</script>
