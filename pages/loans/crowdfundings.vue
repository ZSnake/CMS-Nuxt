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
              Ini halamannya
            </b-col>
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
          label: 'Loans',
          link: '#'
        },
        {
          label: 'Crowdfunding',
          link: '/loans/crowdfundings'
        }
      ];
    }
  },
  data() {
    return {};
  },

  methods: {
  }
};
</script>
