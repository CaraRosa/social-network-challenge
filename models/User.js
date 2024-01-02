const { Schema, model } = require('mongoose');
const assert = require('assert');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: (value) => /\S+@\S+\.\S+/.test(value),
                message: 'Please enter a valid email address.',
            },
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
    );

    userSchema.virtual('friendCount').get(function () {
        return this.friends.length;
    });

    
    const user = new User();

    user.email = 'example@email.com';
    user.username = 'Sarah';

    let error;

    try {
        await user.validate();
    } catch (err) {
        error = err;
    }

    assert.ok(error);
    assert.equal(error.errors['username'].message, 'Please enter a valid username:');
    assert.equal(error.errors['username'].message, 'Please enter a valid username:');

    const User = model('User', userSchema);

    module.exports = User;