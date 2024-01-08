const { User, Thought } = require('../models');

module.exports = {
    // gets all users
    async getUsers (req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch(err) {
            res.status(500).json(err);
        }
    },
    // gets one user by id
    async getOneUser (req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .populate('thoughts')
            .populate('friends')
            .select('-__v');
            
            if(!user) {
                return res.status(400).json( { message: "No user with this id." });
            }

            res.json(user);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // create a user
    async createUser (req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch(err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // update a user by id
    async updateUser (req, res) {
        try {
            const user = await User.findOneAndUpdate( 
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );
            
            if(!user) {
                res.status(400).json({ message: "No user with this id." });
            }
            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // delete a user by id
    async deleteUser (req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId })

            if(!user) {
                res.status(404).json({ message: "No user with that id." });
            }
            // deletes users' thoughts when associated users are deleted
            await Thought.deleteMany({ _id: { $in: user.thoughts } });
            res.json({ message: "User and their thoughts are deleted!" });
        } catch(err) {
            res.status(500).json(err);
        }
    },
}