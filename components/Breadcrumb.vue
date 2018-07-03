<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item" v-for="(item, index) in list" v-bind:key="index">
      <span><router-link :to="item.link">{{ item.label }}</router-link></span>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>
