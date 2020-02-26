<template>
  <div :class="item.divClass">
    <a :class="item.linkClass" :href="`#${item.name}`">
      {{ $t(`nav-bar.${item.name}`) }}
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: "NavLink",
  props: {
    item: {
      type: Object,
      requred: true
    }
  }
};
</script>
