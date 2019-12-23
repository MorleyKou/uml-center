<template>
  <f7-page no-toolbar no-navbar no-swipeback login-screen>
    
    
    <f7-login-screen-title>
      <f7-icon slot="media" ios="f7:person"  aurora="f7:person" md="material:person"></f7-icon>
      EPortfolio
    </f7-login-screen-title>
    <f7-list form>
      <f7-list-input
        label="Username"
        type="text"
        placeholder="Your username"
        :value="username"
        @input="username = $event.target.value"
        info="Required"
        required
        validate
      ></f7-list-input>
      <f7-list-input
        label="Password"
        type="password"
        placeholder="Your password"
        :value="password"
        @input="password = $event.target.value"
        info="Required"
        required
        validate
      ></f7-list-input>
    </f7-list>
    <f7-list>
      <f7-list-button @click="signIn">Sign In</f7-list-button>
      <f7-list-button @click="register">Register</f7-list-button>


      <f7-block-footer>Type something to login.<br>User Role. Issuer / Verifier will product in future </f7-block-footer>
    </f7-list>
  </f7-page>
</template>

<script>
  export default {
    mounted: function () {
      
    },
    data() {
      return {
        username: 'fisco-bcos',
        password: '12345678',
      };
    },
    methods: {
      signIn() {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        // app.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
        //   router.back();
        // });
        router.navigate(`/request-and-load/user/${self.username}/`);
      },
      register() {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        // app.dialog.alert(`Username: ${self.username}<br>Password: ${self.password}`, () => {
        //   router.back();
        // });
        router.navigate(`/register/`);
      },
    },
  };
</script>