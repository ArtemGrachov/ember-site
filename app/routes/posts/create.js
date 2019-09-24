import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      error: false,
      saving: false,
      form: { title: 'New post' }
    }
  }
});
