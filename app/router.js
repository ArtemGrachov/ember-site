import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('posts', function() {
    this.route('single', { path: ':post_id' }, function() {
      this.route('edit');
    });
    this.route('create');
  });
});

export default Router;
