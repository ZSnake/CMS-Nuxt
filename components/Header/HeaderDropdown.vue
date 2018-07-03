<template>
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
          <div class="d-lg-none user">
            <i class="fa fa-user-circle fa-2x"></i>
          </div>
          <div class="d-none d-lg-block user">
            <i class="userLogoPc fa fa-user-circle"></i>   
            <label class="userName font-lg">Alexandra Stephanie <i class="caret-down fa fa-caret-down"></i></label>
          </div>
        </template>
        <b-dropdown-item><i class="fa fa-user"></i> My Account</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-wrench"></i> Change Password</b-dropdown-item>
        <b-dropdown-item @click="logout"><i class="fa fa-lock"></i> Logout</b-dropdown-item>
      </b-nav-item-dropdown>
</template>

<script>
export default {
  name: 'header-dropdown',
  data: () => ({ itemsCount: 42 }),
  methods: {
    async logout() {
      try {
        this.$store.dispatch('logout').then(() => {
          this.$router.push('/login');
        });
      } catch (e) {
        this.formError = e.message;
      }
    }
  }
};
</script>

