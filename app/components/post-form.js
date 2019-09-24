import Component from '@ember/component';

export default Component.extend({
  onSubmit: null,
  disabled: false,
  form: null,
  actions: {
    submit(form) {
      if (this.onSubmit) {
        this.onSubmit(form);
      } else {
        // eslint-disable-next-line no-console
        console.warn('No onSubmit event', form);
      }
    }
  },
  onImgError() {
    // This method is used in for <img> onerror event,
    // so 'this' here refers to the element
    this.src='/assets/image-placeholder.png';
  }
});
