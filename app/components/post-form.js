import FormComponent from './form';

export default FormComponent.extend({
  onImgError() {
    // This method is used in for <img> onerror event,
    // so 'this' here refers to the element
    this.src='/assets/image-placeholder.png';
  }
});
