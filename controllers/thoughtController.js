const { Thought, Reaction } = require("../models");

module.exports = {
    // get all thoughts
    async getThought (req, res) {
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
            const { thought, userId } = req.body;

            if(!thought || !userId) {
                return res.status(400).json({ message: "Unable to create thought." });
            }

            const createdThought = await Thought.create(thought);

            const thoughtId = createdThought._id;

            // push created thought to associated user's thoughts
            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { $push: { thoughts: thoughtId } },
                { new: true}
            );
            
            res.json({ thought: createdThought, updatedUser });
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

    // delete a reaction on a thought
    async deleteReaction (req, res) {
        try {
            const { thoughtId, reactionId } = req.params;

            const deletedReaction = await Reaction.findByIdAndRemove(reactionId);

            if(!deletedReaction) {
                return res.status(400).json({ message: "No reaction with that ID."});
            }

            const thought = await Thought.findByIdAndUpdate(
                thoughtId,
                { $pull: { reactions: reactionId } },
                { new: true}
            );

            if(!thought) {
                return res.status(404).json({ message: "Cannot find thought."});
            }

            res.json({ message: "Reaction deleted successfully.", thought });
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
  };