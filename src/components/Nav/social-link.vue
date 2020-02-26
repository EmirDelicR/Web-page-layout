<template>
  <a
    :class="item.linkClass"
    :href="item.link"
    target="_blank"
    :download="item.download"
  >
    <i :title="item.name.toUpperCase()" :class="item.icon"></i>
  </a>
</template>
<script>
export default {
  name: 'SocialLink',
  props: {
    item: {
      type: Object,
      requred: true
    }
  }
};
</script>
