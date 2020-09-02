const MessageModel = require('../models/MessageModel');
const { insert } = require('./UserController');

module.exports = {
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

    async findByUsername(req, res) {
        const { username } = req.query;

        if (!username) {
            return res.json({
                inserted: false,
                error: 'INVALID INPUTS',
            });
        }

        await MessageModel.find({userUsername: username})
            .exec((err, data) => {
                return res.json(data);
            })
    },

    // mensagens em ordem crescente
    async indexAscending(req, res) {
        const { limit } = req.query;

        if (!limit) {
            const limit = 20; // caso não haja nenhum limite de mensagens buscadas, retorna 20 como padrão
        }

        await MessageModel.find().sort('createdAt').limit(Number(limit)).exec((err, data) => {
            return res.json(data);
        });
    },

    // mensagens em ordem descrescente
    async indexDescending(req, res) {
        await MessageModel.find().sort('-createdAt').exec((err, data) => {
            return res.json(data);
        });
    },
}