import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async deletePost(postId) {
      const post = await this.store.findRecord(
        'post',
        postId,
        { backgroundReload: false }
      );
      post.deleteRecord();
      await post.save();
    }
  }
});
