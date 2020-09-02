const MessageModel = require('../models/MessageModel');
const { insert } = require('./UserController');

module.exports = {
    async index(req, res) {
        await MessageModel.find((err, data) => {
            return res.json(data);
        });
    },

    async insert(req, res) {
        const { content, userId, userUsername } = req.body;

        if (!content || !userId || !userUsername) {
            return res.json({
                inserted: false,
                error: 'INVALID INPUTS',
            });
        }

        const message = new MessageModel();
        
        message.content = content;
        message.userId = userId;
        message.userUsername = userUsername;

        await message.save((err) => {
            if (err) return res.json({ success: false, error: err });
            return res.json({ success: true });
        });
    },
}