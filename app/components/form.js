import Component from '@ember/component';

export default Component.extend({
  onSubmit: null,
  disabled: false,
  error: false,
  form: null,
  actions: {
    async submit(form) {
      if (this.onSubmit) {
        try {
          this.set('disabled', true);
          this.set('error', false);

          await this.onSubmit(form);

          this.set('disabled', false);
          this.set('form', {});
        } catch {
          this.set('disabled', false);
          this.set('error', true);
        }
      } else {
        // eslint-disable-next-line no-console
        console.warn('No onSubmit event', form);
      }
    }
  },
  init() {
    this._super(...arguments);
    if (!this.form) {
      this.set('form', {});
    }
  }
});
