import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  name: DS.attr('string'),
  content: DS.attr('string'),
  post: DS.belongsTo('post')
});
