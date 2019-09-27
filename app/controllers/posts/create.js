import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async createPost(form) {
      const result = await this.store.createRecord('post', form).save();
      this.transitionToRoute('posts.single', result.id);
      return result;
    }
  }
})
