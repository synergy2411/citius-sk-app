"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    username: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        validate: {
            validator: function (value) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message: function (props) {
                return "".concat(props.value, " is not in proper format");
            }
        },
    },
    password: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        validate: {
            validator: function (v) {
                return v.includes('!');
            },
            message: function (props) {
                return "".concat(props.value, " does not contain any special character");
            }
        }
    },
    age: {
        type: mongoose_1.Schema.Types.Number,
        required: true,
        min: [18, "Too less age to work"],
        max: [60, 'Live Long!!']
    },
    role: {
        type: mongoose_1.Schema.Types.String,
        enum: ['ADMIN', "EMPLOYEE"],
        required: true
    },
    isAdmin: {
        type: 'boolean'
    }
}, {
    versionKey: false
});
userSchema.pre("init", function () {
    console.log("PRE : init");
});
userSchema.post("init", function () {
    console.log("POST : init");
});
userSchema.pre("save", function (next) {
    console.log("PRE : SAVE");
    next();
});
userSchema.post("save", function (doc) {
    setTimeout(function () {
        console.log("POST : SAVE 1", doc._id);
    }, 2000);
});
userSchema.post("save", function () {
    console.log("POST : SAVE 2");
});
userSchema.pre("validate", function () {
    console.log("PRE : Validate");
});
userSchema.post("validate", function (doc) {
    console.log("POST : Validate");
    // doc.remove()
});
userSchema.post("remove", function (doc) {
    console.log("POST : Remove", doc._id);
});
userSchema.statics.createUser = function (user) {
    return new UserModel(user);
};
var UserModel = (0, mongoose_1.model)("Users", userSchema);
exports.UserModel = UserModel;
