<template>
  <f7-page name="register">
    <f7-navbar title="Register" back-link="Back"></f7-navbar>

    <f7-block-title>Register for User / Issuer / Verifier </f7-block-title>
    <f7-list no-hairlines-md>
      <f7-list-input
        label="Name in Chinese "
        type="text"
        placeholder="Your name the name on the Macau Smart Identity Card / Other Identity Card . "
        :value="user.name_cn"
        @input="user.name_cn = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="Name in Portuguese "
        type="text"
        placeholder="Your name the name on the Macau Smart Identity Card / Other Identity Card. "
        :value="user.name_pt"
        @input="user.name_pt = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="ID number "
        type="text"
        placeholder="The ID number on the Macau Smart Identity Card / Other Identity Card. "
        :value="user.id_number"
        @input="user.id_number = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="login name"
        type="text"
        placeholder="login name"
        :value="user.username"
        @input="user.username = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="Password"
        type="password"
        placeholder="Password"
        :value="user.password"
        @input="user.password = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="Phone"
        type="tel"
        placeholder="Phone"
        :value="user.phone"
        @input="user.phone = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="Gender"
        type="select"
        :value="user.gender"
        @input="user.gender = $event.target.value"
        >
        <option>Male</option>
        <option>Female</option>
      </f7-list-input>

      <f7-list-input
        label="Birth date"
        type="date"
        placeholder="Birth day"
        defaultValue="2014-04-30"
        :value="user.birthdate"
        @input="user.birthdate = $event.target.value"
      ></f7-list-input>

    <f7-block-title>Get SMS Security Code </f7-block-title>
    <f7-block strong>
      <f7-row tag="p">
        <f7-col width="75">
            <f7-list-input
              clear-button
              type="text"
              placeholder="SMS Security Code"
              :value="user.security_code"
              @input="user.security_code = $event.target.value"
            ></f7-list-input>
        </f7-col>
        <f7-col width="25">
          <f7-button  fill raised>Get Code</f7-button>
        </f7-col>
      </f7-row>
    </f7-block>



    
    <f7-block strong>
      <f7-row tag="p">
        <f7-button class="col" large raised>Clear</f7-button>
        <f7-button class="col" large fill raised @click="register">Register</f7-button>
      </f7-row>
    </f7-block>
      
    </f7-list>
  </f7-page>
</template>

<script>
  export default {
    mounted: function () {
      
    },
    data() {
      return {
        user : {
          name_cn: '',
          name_pt:'',
          id_number: '',
          username:'',
          password:'',
          phone:'',
          gender :'',
          birthdate: new Date(),
          security_code:'ABCD'
        },
        password: '',
      };
    },
    methods: {
      register() {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        // app.dialog.alert(`${self.user}`, () => {
        //   router.back();
        // });
        router.navigate("/login/");
      },
    },
  };
</script>