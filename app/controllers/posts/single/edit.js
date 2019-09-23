import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  submitted: false,
  actions: {
    async updatePost(form) {
      this.set('submitted', true);

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
  }),
  isSaved: computed('submitted', 'model.isSaving', function() {
    return this.submitted &&
      !this.model.isSaving &&
      !this.model.isErrors;
  })
});
