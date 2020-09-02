const UserModel = require('../models/UserModel');

module.exports = {
    async index(req, res) {
        await UserModel.find((err, data) => {
            return res.json({ data });
        })
    },

    async insert(req, res) {
        const { username } = req.body;

        const user = new UserModel();
        user.username = username;

        await user.save((err) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        });
    }
};
