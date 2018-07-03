<template>
  <!--We finally set the class for this link as our computed openClass so it'll change reactively-->
  <router-link tag="li" class="nav-item nav-dropdown" :class="openClass" :to="url" disabled>
    <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i :class="icon"></i> {{name}}</div>
    <ul class="nav-dropdown-items">
      <slot></slot>
    </ul>
  </router-link>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    isSelected: Boolean
  },
  computed: {
    // We set a computed variable that checks
    // isSelected and sets a class to open or empty depending on this
    // isSelected is a prop sent by the parent component
    openClass() {
      const c = this.isSelected ? 'open' : '';
      return c;
    }
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      // When we click each dropdown we emit an event that will
      // be listened to and handled by the parent component
      // We send a selected name to be set in the parent component;
      // if the clicked item is already selected,
      // It'll send empty so the class is 'toggled' and the dropdown closes.
      // If it's _not_ selected it'll send the name
      this.$emit('set-selected', this.isSelected ? '' : this.name);
    }
  }
};
</script>
