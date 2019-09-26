import Component from '@ember/component';

export default Component.extend({
  error: false,
  processing: false,
  showDeleteModal: false,
  onDelete: null,
  actions: {
    openDeleteModal() {
      this.set('showDeleteModal', true);
    },
    async confirmDeleting() {
      this.closeModal();
      if (this.onDelete) {
        this.set('error', false);
        this.set('processing', true);

        try {
          await this.onDelete();
        } catch (err) {
          this.set('error', true);
          this.set('processing', false);

          throw err;
        }
      } else {
        // eslint-disable-next-line no-console
        console.warn('No onDelete event');
      }
    },
    closeModal() {
      this.set('showDeleteModal', false);
    }
  }
});
