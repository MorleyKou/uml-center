
import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import PersonalPage from '../pages/personal.vue';
import CertificationPage from '../pages/certification.vue';
import StatusPage from '../pages/status.vue';
import LoginPage from '../pages/login.vue';
import RegisterPage from '../pages/register.vue';
import ApplyCertificationPage from '../pages/apply-certification.vue';

import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/login/',
    component: LoginPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/personal/',
    component: PersonalPage,
  },
  {
    path: '/certification/',
    component: CertificationPage,
  },
  {
    path: '/status/',
    component: StatusPage,
  },
  {
    path: '/register/',
    component: RegisterPage,
  },
  {
    path: '/applyCertification/',
    component: ApplyCertificationPage,
  },
  

  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          userId: 'user001',
          firstName: 'Fisco',
          lastName: 'Bcos',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          role: 'user',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };




        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: HomePage,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
