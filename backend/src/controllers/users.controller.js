const UserModel = require('../models/user.model');

exports.list = async (req, res) => {
    const { filter } = req.query || '';
    try {
        const users = await UserModel.find({ name: { $regex: filter, $options: 'i' } }).lean();
        res.json({ users });
    } catch (error) {
        res.status(500).send({ message: 'Houve um erro interno.' });
    }
}

exports.register = async (req, res) => {
    const { name } = req.body;
    try {
        const newUser = new UserModel({ name });
        await newUser.save();
        res.json({ newUser, message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).send({ message: 'Houve um erro interno.' });
    }
}