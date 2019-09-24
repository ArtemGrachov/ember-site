import Controller from '@ember/controller';

export default Controller.extend({
  saving: false,
  error: false,
  form: null,
  actions: {
    async createPost(form) {
      this.set('error', false);
      this.set('saving', true);

      try {
        const result = await this.store.createRecord('post', form).save();
        this.transitionToRoute('posts.single', result.id);
      } catch (err) {
        this.set('saving', false);
        this.set('error', true);
      }
    }
  },
  reset() {
    this.set('form', {});
    this.set('error', false);
    this.set('saving', false);
  }
})
