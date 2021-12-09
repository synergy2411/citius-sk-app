import { Document, model, Schema, ValidatorProps } from 'mongoose';
import { IUserDoc, IUserModel, User } from './user';

const userSchema = new Schema({
    username : {
        type : Schema.Types.String,
        required : true,
        validate : {
            validator : (value : string) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
            },
            message : (props: ValidatorProps) => {
                return `${props.value} is not in proper format`;
            }
        },
    },
    password : {
        type : Schema.Types.String,
        required : true,
        validate : {
            validator : (v : string) => {
                return v.includes('!')
            },
            message : (props: ValidatorProps) => {
                return `${props.value} does not contain any special character`
            }
        }
    },
    age : {
        type : Schema.Types.Number,
        required : true,
        min : [18, "Too less age to work"],
        max : [60, 'Live Long!!']
    },
    role : {
        type : Schema.Types.String,
        enum : ['ADMIN', "EMPLOYEE"],
        required : true
    },
    isAdmin :{
        type : 'boolean'
    }
},{
    versionKey : false
})

userSchema.pre("init", () => {
    console.log("PRE : init")
})
userSchema.post("init", () => {
    console.log("POST : init")
})
userSchema.pre("save", (next) => {
    console.log("PRE : SAVE")
    next();
})
userSchema.post("save", (doc : Document) => {
    setTimeout(() => {
        console.log("POST : SAVE 1", doc._id)
    }, 2000);
})
userSchema.post("save", () => {
        console.log("POST : SAVE 2")
})
userSchema.pre("validate", () => {
    console.log("PRE : Validate")
})
userSchema.post("validate", (doc : Document) => {
    console.log("POST : Validate")
    // doc.remove()
})
userSchema.post("remove", (doc : Document) => {
    console.log("POST : Remove", doc._id)
})


userSchema.statics.createUser = (user : User) => {
    return new UserModel(user)
}

const UserModel = model<IUserDoc, IUserModel>("Users", userSchema)

export { UserModel };


