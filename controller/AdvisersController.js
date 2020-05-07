const { AdvisersService } = require('../services')

module.exports = {
  create: async (req, res) => {
    try {
      const adviser = await AdvisersService.create(req.body)
      res.status(201).send(adviser)
    }catch (err) { 
      res.status(400).send({ message: 'Error creating user', err });
    }
  },
  find: async (req, res) => {
    try {
      const advisers = await AdvisersService.find()
      res.status(200).send(advisers)
    }catch (err) { 
      res.status(404).send({ message: 'Users not found', err });
     }
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
  findByIdAndUpdate: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const adviser = await AdvisersService.findById(id)
      const updatedAdviser = await AdvisersService.update(adviser, body)
      res.status(200).send(updatedAdviser)

    }catch (err) { 
      res.status(400).send({ message: "Error updating user", err });
    }
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

