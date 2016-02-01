export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './screens/home/welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: './screens/users/users',        nav: true, title: 'Github Users' },
      { route: 'shop',  name: 'shop', moduleId: './screens/shop/shop-router', nav: true, title: 'Shop' }
    ]);

    router.baseUrl = '/';
    this.router = router;
  }
}
