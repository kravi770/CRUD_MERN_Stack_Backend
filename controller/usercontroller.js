import User from '../schema/userschema.js';

export const adduser = async (req, res) => {
  const user = req.body;
  const newUSer = new User(user);

  try {
    await newUSer.save();
    res.status(201).json(newUSer);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
export const editUser = async (req, res) => {
  let user = req.body;
  const editUser = new User(user);
  try {
    await User.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
export const deleteUSer = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
