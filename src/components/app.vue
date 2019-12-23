<template>
<f7-app :params="f7params" >

  <!-- Left panel with cover effect-->
  <f7-panel left cover theme-dark>
    <f7-view left>
      <f7-page>
            <f7-block-title>Navigation</f7-block-title>
            <f7-list>
              <f7-list-item>
                <f7-icon slot="media" ios="f7:home"  aurora="f7:home" md="material:home"></f7-icon>
                <f7-link href="/" tab-link-active text="Home" panel-close="left"></f7-link>
              </f7-list-item>
              <f7-list-item>
                <f7-icon slot="media" ios="f7:notifications"  aurora="f7:notifications" md="material:notifications"></f7-icon>
                <f7-link href="/status/" data-view=".view-main" text="Status" panel-close="left"></f7-link>
              </f7-list-item>
              <f7-list-item >
                <f7-icon slot="media" ios="f7:folder_special"  aurora="f7:folder_special" md="material:folder_special"></f7-icon>
                <f7-link href="/certification/" data-view=".view-main" text="Certification" panel-close="left"></f7-link>
              </f7-list-item>
              <f7-list-item >
                <f7-icon slot="media" ios="f7:person"  aurora="f7:person" md="material:person"></f7-icon>
                <f7-link href="/personal/" data-view=".view-main" text="Personal" panel-close="left"></f7-link>
              </f7-list-item>
              <f7-list-item >
                <f7-icon slot="media" ios="f7:exit_to_app"  aurora="f7:exit_to_app" md="material:exit_to_app"></f7-icon>
                <f7-link href="/login/" data-view=".view-main" text="Logout" panel-close="left" ></f7-link>
              </f7-list-item>
            </f7-list>

          </f7-page>
    </f7-view>
  </f7-panel>


  <!-- Right panel with reveal effect-->
  <f7-panel right reveal theme-dark>
    <f7-view right>
      <f7-page>
        <f7-navbar title="Personal"></f7-navbar>
        <f7-block>
          abc
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-panel>


  <!-- Your main view, should have "view-main" class -->
  <f7-view main class="safe-areas" url="/login/"></f7-view>


  <!-- Popup -->
  <f7-popup id="my-popup">
    <f7-view>
      <f7-page>
        <f7-navbar title="Popup">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <p>Popup content goes here.</p>
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-popup>

  <f7-login-screen id="my-login-screen">
    <f7-view>
      <f7-page login-screen>
        <f7-login-screen-title>Login</f7-login-screen-title>
        <f7-list form>
          <f7-list-input
            type="text"
            name="username"
            placeholder="Your username"
            :value="username"
            @input="username = $event.target.value"
          ></f7-list-input>
          <f7-list-input
            type="password"
            name="password"
            placeholder="Your password"
            :value="password"
            @input="password = $event.target.value"
          ></f7-list-input>
        </f7-list>
        <f7-list>
          <f7-list-button title="Sign In" login-screen-close @click="alertLoginData"></f7-list-button>
          <f7-block-footer>
            Some text about login information.<br>Click "Sign In" to close Login Screen
          </f7-block-footer>
        </f7-list>
      </f7-page>
    </f7-view>
  </f7-login-screen>
</f7-app>
</template>
<script>

  import routes from '../js/routes.js';

  export default {
    data() {
      return {
        // Framework7 Parameters
        f7params: {
          name: 'Eportfolio', // App name
          theme: 'auto', // Automatic theme detection
          // App root data
          data: function () {
            return {
              user: {
                firstName: 'John',
                lastName: 'Doe',
              },

            };
          },

          // App routes
          routes: routes,
          // Register service worker
          serviceWorker: {
            path: '/service-worker.js',
          },
        },

        // Login screen data
        username: '',
        password: '',
      }
    },
    methods: {
      alertLoginData() {
        this.$f7.dialog.alert('Username: ' + this.username + '<br>Password: ' + this.password);
      }
    },
    mounted() {
      this.$f7ready((f7) => {

        // Call F7 APIs here
      });
    }
  }
</script>