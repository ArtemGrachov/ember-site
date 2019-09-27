import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  async model(params) {
    const store = this.store;
    const postId = this.paramsFor('posts.single').post_id;

    const result = await RSVP.hash({
      post: store.findRecord('post', postId),
      comments: store.query('comment', { post: postId })
    })

    const post = result.post;

    post.get('comments').pushObjects(result.comments);

    return { post };
  }
});
