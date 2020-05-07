const { AdvisersService } = require('../services')

module.exports = {
  create: (req, res) => {
    AdvisersService.create(req.body)
      .then(adviser => res.status(201).send(adviser))
      .catch(err => res.status(400).send({ message: 'Error creating user', err }));
  },
  find: (req, res) => {
    AdvisersService.find()
      .then(advisers => res.status(200).send(advisers))
      .catch(err => res.status(404).send({ message: 'Users not found', err }));
  },
  findById: async (req, res) => {
    const { id } = req.params;
    try {
      const advisers = await AdvisersService.findById(id); 
      res.status(200).send(advisers);
    } catch (error) {
      res.status(404).send({ message: "Not found", err })
    }
  },
  findByIdAndUpdate: (req, res) => {
    const { id } = req.params;
    const { body } = req;
    AdvisersService.findById(id)
      .then(adviser => AdvisersService.update(adviser, body))
      .then(updatedUser => res.status(200).send(updatedUser))
      .catch(err => res.status(400).send({ message: "Error updating user", err }));
  },
  findByIdAndDelete: async (req, res) => {
    const { id } = req.params;
    try {
      const adviser = await AdvisersService.findById(id);
      await AdvisersService.update(adviser, { is_active: false })
      res.status(204).send(); 
    } catch (error) {
      res.status(404).send({ message: "Error deleting user", error });
    }
  }
}

