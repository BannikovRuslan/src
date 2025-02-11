import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-product-18034-book-l');
  this.route('i-i-s-product-18034-book-e',
  { path: 'i-i-s-product-18034-book-e/:id' });
  this.route('i-i-s-product-18034-book-e.new',
  { path: 'i-i-s-product-18034-book-e/new' });
  this.route('i-i-s-product-18034-presentation-l');
  this.route('i-i-s-product-18034-presentation-e',
  { path: 'i-i-s-product-18034-presentation-e/:id' });
  this.route('i-i-s-product-18034-presentation-e.new',
  { path: 'i-i-s-product-18034-presentation-e/new' });
});

export default Router;
