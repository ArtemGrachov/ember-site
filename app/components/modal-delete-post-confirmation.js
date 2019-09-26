import Component from '@ember/component';

export default Component.extend({
  confirmDeleting: null,
  onHidden: null,
  actions: {
    confirmDeleting() {
      if (this.confirmDeleting) {
        this.confirmDeleting();
      } else {
        console.warn('No confirmDeleting method provided');
      }
    },
    onHidden() {
      if (this.onHidden) {
        this.onHidden();
      } else {
        console.warn('No onHidden method provided');
      }
    }
  }
});
