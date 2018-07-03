<template>
  <div class="app header-fixed">
    <AppHeader/>
    <div class="app-body">
      <Sidebar :navItems="nav"/>
      <main class="main">
        <notifications position="top right" />
          <nuxt />
      </main>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import nav from './menu';
import { Header as AppHeader, Sidebar, Footer as AppFooter, Breadcrumb } from '../components';

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppFooter,
    Breadcrumb
  },
  data() {
    return {
      nav: nav.items
    };
  },
  computed: {
    name() {
      return this.$route.name;
    }
  }
};

</script>