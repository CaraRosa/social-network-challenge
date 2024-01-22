const { Thought, Reaction, User } = require("../models");

module.exports = {
    // get all thoughts
    async getThoughts (req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // get one thought by ID
    async getOneThought (req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })

            if(!thought) {
                return res.status(400).json({ message: "No thought with that ID."});
            }
            res.json(thought)
        } catch(err) {
            res.status(500).json(err);
        }
    },

    // create a new thought
    async createThought (req, res) {
        try {
            console.log(req.body);
            const thought = req.body

            const createdThought = await Thought.create(thought);
            console.log(createdThought);

            // push created thought to associated user's thoughts
            const updatedUser = await User.findByIdAndUpdate(
                thought.userId,
                { $push: { thoughts: createdThought._id } },
                { new: true }
            );
            
            if(!updatedUser) {
                return res.status(400).json({ message: "User not found."});
            }

            // if(!thought || !userId) {
            //     return res.status(400).json({ message: "Unable to create thought." });
            // }

            

            const thoughtId = createdThought._id;

            
            res.json({ 
                message: "created thought"
               });
            // res.json({ thought: createdThought, updatedUser });
        } catch(err) {
            console.error(err);
            return res.status(500).json(err);
        }
    },

    // update a thought by its ID
    async updateThought (req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId},
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if(!thought) {
            res.status(400).json({ message: "No thought with this ID."});
        }
        res.json(thought);
    } catch(err) {
        res.status(500).json(err);
    }

  },

  // delete a thought by its ID
  async deleteThought (req, res) {
    try {
        const thought = await Thought.findOneAndDelete ({ _id: req.params.thoughtId })

        if(!thought) {
            res.status(400).json({ message: "No thought with that ID."});
        }
        res.json({ message: "Thought successfully deleted!" });


    } catch(err) {
        res.status(500).json(err);
    }
  },

  // create a reaction on a thought
  async createReaction (req, res) {
        console.log('Adding a reaction');
        console.log(req.body);

        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            );

            if(!thought) {
                return res.status(404).json({ message: "No thought with that ID."});
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

  async deleteReaction (req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
        if(!thought) {
            return res.status(404).json({ message: "No thought with that ID."});
        }

        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
    }
  };