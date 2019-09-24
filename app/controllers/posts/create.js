import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async createPost(form) {
      this.set('model.error', false);
      this.set('model.saving', true);
      try {
        const result = await this.store.createRecord('post', form).save();
        this.transitionToRoute('posts.single', result.id);
      } catch (err) {
        this.set('model.saving', false);
        this.set('model.error', true);
      }
    }
  }
})
