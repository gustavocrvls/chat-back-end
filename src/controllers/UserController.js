const UserModel = require('../models/UserModel');

module.exports = {
    async index(req, res) {
        await UserModel.find((err, data) => {
            return res.json({ data });
        })
    }
};
