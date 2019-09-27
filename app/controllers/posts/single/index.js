import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);

    if (!this.commentForm) {
      this.set('commentForm', {});
    }
  },
  actions: {
    async sendComment(form) {
      const post = this.model.post;
      const comment = this.store.createRecord('comment', form);

      const result = await comment.save();
      post.comments.pushObject(comment);

      return result;
    }
  }
});
