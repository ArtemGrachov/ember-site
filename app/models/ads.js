import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  imageUrl: DS.attr('string'),
  price: DS.attr('number')
})
