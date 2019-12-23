<template>
  <f7-page name="personal">
    <f7-navbar title="personal" back-link="Back"></f7-navbar>

    <f7-block strong>
      <f7-block-title>Personal Data</f7-block-title>
      <f7-list>
        <f7-list-item link="#" header="Name in Chinese" title="陳大文" after="Edit">
          <f7-icon slot="media" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"></f7-icon>
        </f7-list-item>
        <f7-list-item link="#" header="Name in Portuguese" title="Chan da man" after="Edit">
          <f7-icon slot="media" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"></f7-icon>
        </f7-list-item>
        <f7-list-item link="#" header="ID number" title="51*****7" after="Edit">
          <f7-icon slot="media" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"></f7-icon>
        </f7-list-item>
        <f7-list-item link="#" header="Phone" title="+853 66123456" after="Edit">
          <f7-icon slot="media" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"></f7-icon>
        </f7-list-item>
        <f7-list-item link="#" header="Gender" title="Male" after="Edit">
          <f7-icon slot="media" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"></f7-icon>
        </f7-list-item>
        <f7-list-item link="#" header="Birth date" title="18/08/1992" after="Edit">
          <f7-icon slot="media" icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu"></f7-icon>
        </f7-list-item>
      </f7-list>

    <f7-block-title>Certification shared</f7-block-title>
    <f7-list>
      <f7-list-item title="CPTTM" badge="5">
        <f7-toggle checked color="red" slot="after" ></f7-toggle>
      </f7-list-item>
      <f7-list-item title="Account of Gov.mo" badge="3">
        <f7-toggle checked color="red" slot="after" ></f7-toggle>
      </f7-list-item>
      <f7-list-item title="Macao Polytechnic Institute" badge="1">
        <f7-toggle checked color="red" slot="after" ></f7-toggle>
      </f7-list-item>
      <f7-block-footer>
        <p>Here comes some the Third party about list above that can access your Certification.</p>
      </f7-block-footer>
    </f7-list>

   </f7-block>





  </f7-page>
</template>
<script>
import { scrypt } from "crypto";

  export default {
    mounted: function () {
      
    },
    data() {
      return {
        username: '',
        password: '',
      };
    },
  };
</script>
