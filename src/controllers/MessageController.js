const MessageModel = require('../models/MessageModel');

module.exports = {

    // mensagens em ordem descrescente
    async index(req, res) {
        await MessageModel
        .limit(50)
        .sort('-createdAt')
        .exec((err, data) => {
            return res.json(data);
        });
    },

    async indexFilter(req, res) {
        let chatOrder = '-createdAt';
        let userUsername = { userUsername: '' };
        let dateQuery = '1 == 1';

        const { filterOrder, filterUsername, filterDate } = req.body;

        filterOrder == 'asc' ? chatOrder = 'createdAt' : chatOrder = '-createdAt';
        filterUsername != undefined && filterUsername.length <= 0 ? userUsername = {} : userUsername.userUsername = filterUsername;
        filterDate  != undefined && filterDate.length <=0 ? dateQuery : dateQuery = `this._id.getTimestamp().toISOString().substring(0, 10) == '${filterDate}'`

        if (filterDate.type != undefined) {
            await MessageModel.find(userUsername)
            .sort(chatOrder)
            .$where(dateQuery)
            .exec((err, data) => {
                return res.json(data);
            });
        } else {
            await MessageModel.find(userUsername)
            .sort(chatOrder)
            .exec((err, data) => {
                return res.json(data);
            });
        }
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

    async findByUsername(req, res) {
        const { username } = req.query;

        if (!username) {
            return res.json({
                inserted: false,
                error: 'INVALID INPUTS',
            });
        }

        await MessageModel.find({ userUsername: username })
            .exec((err, data) => {
                return res.json(data);
            })
    },

    // mensagens em ordem crescente
    async indexAscending(req, res) {
        const limit = 20;
        if (req.query.limit)
            limit = req.query.limit;

        await MessageModel.find().sort('createdAt').limit(Number(limit)).exec((err, data) => {
            return res.json(data);
        });
    },

    // mensagens em ordem descrescente
    async indexDescending(req, res) {
        const limit = 20;
        if (req.query.limit)
            limit = req.query.limit;

        await MessageModel.find().sort('-createdAt').limit(Number(limit)).exec((err, data) => {
            return res.json(data);
        });
    },
}