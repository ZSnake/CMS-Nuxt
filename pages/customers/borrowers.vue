<template>
  <div class="animated fadeIn">
    <Breadcrumb :list="menu" />
    <div class="container-fluid">
      <b-card no-body id="new47">
        <div slot="header">
          NAMA HALAMAN
        </div>
        <b-card-body>
          <b-row class="text-center">
            <b-col class="mb-5" cols="12">
              Ini halaman borrower
            </b-col>
            <div>
              <div><b-button variant="danger" class="mt-4" @click="showError">danger</b-button></div>
              <div><b-button variant="warning" class="mt-4" @click="showWarning">warning</b-button></div>
              <div><b-button variant="success" class="mt-4" @click="showSuccess">success</b-button></div>
            </div>
          </b-row>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb.vue';

export default {
  components: {
    Breadcrumb
  },
  computed: {
    menu() {
      return [
        {
          label: 'Home',
          link: '/'
        },
        {
          label: 'Customers',
          link: '#'
        },
        {
          label: 'Borrowers',
          link: '/customers/borrowers'
        }
      ];
    }
  },
  data() {
    return {};
  },

  methods: {
    showSuccess() {
      this.$notify({
        type: 'success',
        text: 'Sukses melakukan update data!\nSukses melakukan update data!\nSukses melakukan update data!'
      });
    },
    showWarning() {
      this.$notify({
        type: 'warn',
        text: 'Sukses melakukan update data!\nSukses melakukan update data!\nSukses melakukan update data!'
      });
    },
    showError() {
      this.$notify({
        type: 'error',
        text: 'Sukses melakukan update data!\nSukses melakukan update data!\nSukses melakukan update data!'
      });
    }
  }

};
</script>
