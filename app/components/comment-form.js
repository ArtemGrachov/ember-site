import Component from '@ember/component';

export default Component.extend({
  onSubmit: null,
  disabled: false,
  form: null,
  actions: {
    async submit(form) {
      if (this.onSubmit) {
        const result = await this.onSubmit(form);
      } else {
        // eslint-disable-next-line no-console
        console.warn('No onSubmit event', form);
      }
    }
  }
});
