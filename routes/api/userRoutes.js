const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// /api/users GET all users and POST a new user by ID
router.route('/').get(getUsers).post(createUser);

router.route('/:userId')
.get(getOneUser)
.put(updateUser)
.delete(deleteUser);

// /api/users/:userId/friends/:friendId POST to add a friend and DELETE a friend by ID
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;