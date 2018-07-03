import Vue from 'vue';
import VeeValidate from 'vee-validate';
import idMessage from 'vee-validate/dist/locale/id';

// if you need to custom Vue validate, write here ;)

VeeValidate.Validator.localize('id', idMessage);

Vue.use(VeeValidate);
