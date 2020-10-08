const mongoose = require("mongoose");
const { User } = require("../models");
const { update } = require("../models/User");

module.exports = {
  async index(request, response) {
    const users = await User.find()

    return response.json(users)
  },
  async show (request, response) {
    const { id } = request.params;
    var user = false

    if (mongoose.Types.ObjectId.isValid(id)){
      user = await User.findById(id) 

      return response.json(user)
    }
    if (!user) {
      return response.status(404).json({ message: 'User not found!!' })
    }

  },
  async store(request, response) {
    const { username, password } = request.body;

    const userExists = await User.findOne({ username });
 
    if(userExists) return response.json(userExists)

    const createUser = { username, password }

    const user = await User.create(createUser);

    return response.status(201).json({ user })
  },
  async update(request, response){
    const { id } = request.params;
    const { username, password } = request.body;

    const userExists = await User.findById(id);

    if (userExists) {
      const userAltered = await User.findByIdAndUpdate(id, { username, password })

      return response.json(userAltered)
    }

    return response.status(404).json({ message: 'User not found!!' }) 
  },
  async destroy(request, response){
    const { id } = request.params;
    const userExists = await User.findById(id);

    if (userExists) {
      
      await User.findByIdAndDelete(id)

      return response.json({ message: 'User successfully deleted'})
    }

    return response.status(404).json({ message: 'User not found!!' }) 
  }
}
