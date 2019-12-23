<template>
  <f7-page name="applyCertification">
    <f7-navbar title="Apply Certification" back-link="Back"></f7-navbar>
      <f7-list no-hairlines-md>
      <f7-list-input
        label="Phone"
        type="tel"
        placeholder="Phone"
        :value="certification.phone"
        @input="certification.phone = $event.target.value"
      ></f7-list-input>

      <f7-list-input
        label="Issuer"
        type="select"
        :value="certification.issuer_code"
        @input="certification.issuer_code = $event.target.value"
        >
        <option>CPTTM</option>
        <option>UM </option>
        <option>IPM </option>
        <option>IFT </option>
        <option>MUST </option>
      </f7-list-input>

      <f7-list-input
        label="Certification"
        type="select"
        :value="certification.certification_code"
        @input="certification.certification_code = $event.target.value"
        >
        <option>111111</option>
        <option>22222</option>
        <option>33333</option>
        <option>444444</option>
      </f7-list-input>

    <f7-block-title>Get SMS Security Code </f7-block-title>
    <f7-block strong>
      <f7-row tag="p">
        <f7-col width="75">
            <f7-list-input
              clear-button
              type="text"
              placeholder="SMS Security Code"
              :value="certification.security_code"
              @input="certification.security_code = $event.target.value"
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
        <f7-button class="col" large fill raised @click="applyCertification">Apply Certification</f7-button>
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
        certification : {
          issuer_code: '',
          certification_code:'',
          phone:'',
          security_code:'ABCD'
        },
        password: '',
      };
    },
    methods: {
      applyCertification() {
        const self = this;
        const app = self.$f7;
        const router = self.$f7router;
        // app.dialog.alert(`${self.certification}`, () => {
        //   router.back();
        // });
        router.navigate("/");
      },
    },
  };
</script>