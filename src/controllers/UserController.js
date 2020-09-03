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
        
        if (req.body.userType) user.userType = req.body.userType;
        else user.userType = 1;

        await user.save((err) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        });
    },

    async login(req, res) {
        const { username } = req.body;

        await UserModel.findOne({username}).exec((err, data) => {
            return res.json(data);
        });
    }
};
