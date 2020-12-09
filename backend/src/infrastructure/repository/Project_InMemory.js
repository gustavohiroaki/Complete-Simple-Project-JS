class ProjectInMemory {
  constructor() {
    this.db = [];
  }

  create(data) {
    this.db.push(data);
    return data;
  }

  list() {
    return this.db;
  }

  delete(id) {
    const index = this.db.findIndex((data) => data.id === id);
    if (index < 0) return { error: "id not found" };

    this.db.splice(index, 1);
    return id;
  }

  update(id, data) {
    const index = this.db.findIndex((data) => data.id === id);
    if (index < 0) return { error: "id not found" };

    this.db[index] = data;
    return data;
  }
}

module.exports = new ProjectInMemory();
