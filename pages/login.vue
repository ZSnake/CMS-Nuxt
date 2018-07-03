<template>
    <div>
      <b-row class="justify-content-center">
        <img src="../static/img/logo.svg" class="logo-morak mb-5 mt-5"/>
      </b-row>
      <b-row class="justify-content-center">
          <b-card no-body class="mx-4 login-card">
            <b-card-body class="p-4">

              <p class="mb-1">Email Kantor</p>

              <input name="Email"
                    v-model="email"
                    v-validate="'required|email'"
                    :class="{'input': true, 'is-invalid': errors.has('Email')}"
                    type="text"
                    placeholder="email@modalrakyat.id"
                    class="form-control">
              
              <span v-show="errors.has('Email')" class="alert-danger show-email-error ">{{ errors.first('Email') }}</span>

              <p class="mb-1 mt-2">Password</p>
              <input name="Password"
                    id="password"
                    v-model="password"
                    v-validate="'required|min:2'"
                    :class="{'input': true, 'is-invalid': errors.has('Password')}"
                    type="password"
                    placeholder="Password"
                    class="form-control">
              <a class="fa fa-eye icon-eye" @click="showPass"></a>
              
              <span v-show="errors.has('Password')" class="alert-danger show-email-error ">{{ errors.first('Password') }}</span>

              <b-button variant="md" block class="login-button mt-4" @click.prevent="validateBeforeSubmit">Login</b-button>

              <b-row class="justify-content-center">
                <p class="mt-2 mb-2">OR</p>
              </b-row>

              <b-button variant="md" block class="mb-3 gmail-button"><img src="../static/img/bluegmail.png" class="logo-gmail"/>
              Login Menggunakan Gmail
              </b-button>

            </b-card-body>
          </b-card>
      </b-row>
    </div>
</template>

<script>
  export default {
    name: 'Register',
    layout: 'clean',
    methods: {
      showPass() {
        const passwordField = document.querySelector('#password');
        if (passwordField.getAttribute('type') === 'password') passwordField.setAttribute('type', 'text');
        else passwordField.setAttribute('type', 'password');
      },

      validateBeforeSubmit() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            // alert('success');
          }
        });
      }
    },

    data() {
      return {
        email: '',
        password: ''
      };
    }
  };
</script>
