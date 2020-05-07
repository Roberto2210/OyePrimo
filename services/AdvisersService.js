const Advisers = require('../models/Advisers');

module.exports = {
  create: (body) => Advisers.create(body),
  find: () => Advisers.find({ is_active: true }),
  findById: (id) => Advisers.findById(id),
  update: (adviser, body) => {
    Object.assign(adviser, body);
    return user.save();
  },
}
