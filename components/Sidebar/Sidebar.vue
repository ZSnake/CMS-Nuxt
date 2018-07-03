<template>
  <div class="sidebar font-sm">
    <SidebarHeader/>
    <SidebarForm/>
    <nav class="sidebar-nav">
      <div slot="header"></div>
      <ul class="nav">
        <template v-for="(item) in navItems">
          <template v-if="item.title">
            <SidebarNavTitle :name="item.name" :classes="item.class" :wrapper="item.wrapper" v-bind:key="item.key"/>
          </template>
          <template v-else-if="item.divider">
            <SidebarNavDivider :classes="item.class" v-bind:key="item.key"/>
          </template>
          <template v-else-if="item.label">
            <SidebarNavLabel :name="item.name" :url="item.url" :icon="item.icon" :label="item.label" :classes="item.class" v-bind:key="item.key"/>
          </template>
          <template v-else>
            <template v-if="item.children">
              <!-- First level dropdown -->
              <!--
                We pass in is-selected as prop which calls the isSelected
                function and checks
                the name of the generated dropdown to see if that's the one that's
                currently selected. It passes true/false
                We also _listen_ to the 'set-selected' event with the v-on:set-selected passing
                in setSelectedItem as a reaction
                The rest of the work is done in the child component.
              -->
              <SidebarNavDropdown
                :is-selected="isSelected(item.name)"
                v-on:set-selected="setSelectedItem"
                :name="item.name"
                :url="item.url"
                :icon="item.icon"
                v-bind:key="item.key"
              >
                <template v-for="(childL1) in item.children">
                  <template v-if="childL1.children">
                    <!-- Second level dropdown -->
                    <SidebarNavDropdown :name="childL1.name" :url="childL1.url" :icon="childL1.icon" v-bind:key="childL1.key">
                      <li class="nav-item" v-for="(childL2) in childL1.children" v-bind:key="childL2.key">
                        <SidebarNavLink :name="childL2.name" :url="childL2.url" :icon="childL2.icon" :badge="childL2.badge" :variant="item.variant"/>
                      </li>
                    </SidebarNavDropdown>
                  </template>
                  <template v-else>
                    <!-- eslint-disable -->
                    <SidebarNavItem :classes="item.class">
                      <SidebarNavLink :name="childL1.name" :url="childL1.url" :icon="childL1.icon" :badge="childL1.badge" :variant="item.variant"/>
                    </SidebarNavItem>
                    <!-- eslint-enable -->
                  </template>
                </template>
              </SidebarNavDropdown>
            </template>
            <template v-else>
              <SidebarNavItem :classes="item.class" v-bind:key="item.key">
                <SidebarNavLink :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" :variant="item.variant"/>
              </SidebarNavItem>
            </template>
          </template>
        </template>
      </ul>
      <slot></slot>
    </nav>
    <SidebarFooter/>
    <!-- <SidebarMinimizer/> -->
  </div>
</template>
<script>
import SidebarFooter from './SidebarFooter.vue';
import SidebarForm from './SidebarForm.vue';
import SidebarHeader from './SidebarHeader.vue';
import SidebarMinimizer from './SidebarMinimizer.vue';
import SidebarNavDivider from './SidebarNavDivider.vue';
import SidebarNavDropdown from './SidebarNavDropdown.vue';
import SidebarNavLink from './SidebarNavLink.vue';
import SidebarNavTitle from './SidebarNavTitle.vue';
import SidebarNavItem from './SidebarNavItem.vue';
import SidebarNavLabel from './SidebarNavLabel.vue';

export default {
  name: 'sidebar',
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      selectedItemName: ''
    };
  },
  components: {
    SidebarFooter,
    SidebarForm,
    SidebarHeader,
    SidebarMinimizer,
    SidebarNavDivider,
    SidebarNavDropdown,
    SidebarNavLink,
    SidebarNavTitle,
    SidebarNavItem,
    SidebarNavLabel
  },
  methods: {
    setSelectedItem(itemName) {
      // Method that receives an itemName and sets it as the currently seelcted.
      // There can only be one so there will always be just one selected item.
      this.selectedItemName = itemName;
    },
    isSelected(itemName) {
      // Method that receives a dropdown item name and
      // compares it to the currently selected item name.
      return this.selectedItemName === itemName;
    }
  }
};
</script>

<style lang="css">
.nav-link {
  cursor: pointer;
}
</style>
