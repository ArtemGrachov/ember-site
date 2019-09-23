import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async createPost(form) {
      await this.store.createRecord('post', form).save();
    }
  }
})
