<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false" large>
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>Eportfolio</f7-nav-title>
      <f7-nav-right>
        <f7-menu>
          <f7-menu-item href="#" icon-f7="person" :text="`${user.firstName} ${user.lastName}`"></f7-menu-item>
          <f7-menu-item href="#" icon-f7="transit_enterexit" :text="`${user.role}`"></f7-menu-item>
        </f7-menu>

        <!-- <f7-link icon-ios="f7:person" icon-aurora="f7:person" icon-md="material:person" panel-open="right"></f7-link> -->
      </f7-nav-right>
      <f7-nav-title-large sliding>Eportfolio</f7-nav-title-large>
    </f7-navbar>
    <!-- Toolbar-->
    <f7-toolbar tabbar labels :position="'bottom'">
      <f7-link href="/" tab-link-active text="Home" icon-ios="f7:home" icon-aurora="f7:home" icon-md="material:home"></f7-link>
      <f7-link href="/status/" text="Status" icon-ios="f7:notifications"  icon-aurora="f7:notifications" icon-md="material:notifications"></f7-link>
      <f7-link href="/certification/" text="Certification" icon-ios="f7:folder_special" icon-aurora="f7:folder_special" icon-md="material:folder_special"></f7-link>
      <f7-link href="/personal/" text="Personal" icon-ios="f7:person" icon-aurora="f7:person" icon-md="material:person"></f7-link>
    </f7-toolbar>

    <!-- Page content-->
    <f7-block strong>
      <p>Let's see what Certification we have here.</p>
    </f7-block>

 

  </f7-page>
</template>
<script>
  export default {
    data() {
      return {
        user: this.$f7route.context.user,
      }
    }
  }
</script>