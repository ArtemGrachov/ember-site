import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  actions: {
    async updatePost(form) {
      for (let key in form) {
        this.model.set(key, form[key]);
      }

      await this.model.save();
    }
  },
  form: computed('model', function() {
    return {
      title: this.model.get('title'),
      content: this.model.get('content'),
      imageUrl: this.model.get('imageUrl')
    }
  })
});
