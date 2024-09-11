class Enum {
  constructor(type) {
    this.type = type;
  }

  message() {
    return this.type;
  }
}

module.exports = Enum;
