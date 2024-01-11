const router = require('express').Router();

const {
    getThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/users/:thoughtId GET one thought; PUT to update a thought and DELETE to remove a thought by its ID
router.route('/:thoughtId')
.get(getOneThought)
.put(updateThought)
.delete(deleteThought)

// /api/thoughts/:thoughtId/reactions POST to create new reactions
router.route('/:thoughtId/reactions')
.post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by its ID
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;