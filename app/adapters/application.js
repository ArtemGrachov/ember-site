import DS from 'ember-data';
import Inflector from 'ember-inflector';

export default DS.Adapter.extend({
  host: 'http://localhost:3000',
  path(modelName) {
    return `${this.host}/${Inflector.inflector.pluralize(modelName)}`;
  },
  async findRecord(store, type, id) {
    const result = await fetch(`${this.path(type.modelName)}/${id}`);
    return result.json();
  },
  async createRecord(store, type, snapshot) {
    const body = JSON.stringify(
      this.serialize(snapshot)
    );

    await fetch(
      this.path(type.modelName),
      {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  },
  async updateRecord(store, type, snapshot) {
    const body = JSON.stringify(
      this.serialize(snapshot, { includeId: false })
    );

    await fetch(
      `${this.path(type.modelName)}/${snapshot.id}`,
      {
        method: 'PATCH',
        body,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  },
  async deleteRecord(store, type, snapshot) {
    await fetch(
      `${this.path(type.modelName)}/${snapshot.id}`,
      {
        method: 'DELETE'
      }
    );
  },
  async findAll(store, type) {
    const data = await fetch(this.path(type.modelName));
    return data.json();
  },
  async query(store, type, query) {
    const url = new URL(this.path(type.modelName));
    url.search = new URLSearchParams(query);

    const data = await fetch(url);
    return data.json();
  },
  shouldReloadRecord() {
    return true;
  }
})
