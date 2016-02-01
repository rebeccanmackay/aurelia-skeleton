export class ShopRouter {
  heading = 'Shop Router';

  configureRouter(config, router) {
    config.map([
      { route: ['', 'shop'], name: 'shop', moduleId: './shop-index', nav: true, title: 'Welcome to the shop' }
    ]);

    router.baseUrl = '/shop';
    this.router = router;
  }
}
