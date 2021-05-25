const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema= new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "Please provide first name"]
    },
    lastname: {
        type: String,
        required: [true, "Please provide last names"]
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
        
        match: [/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,"Please provide a valid email"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        select: false
    },
    classroomsEnrolled: {
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    },
    classroomsHosted: {
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    },
    classroomsJoined: {
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    },
    savedNotes: {
        type: [mongoose.SchemaTypes.ObjectId],
        default: []
    },
    recievedInvites: {
        type: [{
            sender: mongoose.SchemaTypes.ObjectId,
            time: mongoose.SchemaTypes.Date
        }],
        default: []
    },
    forgotPasswrodToken: String,
    forgotPasswrodLimit: Date
},{
    timestamp: true
});

UserSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User= mongoose.model("User", UserSchema);

module.exports=User;


//*********************EMAIL VALIDATION REQUIREMENT *********************************/
// The personal_info part contains the following ASCII characters.

// Uppercase (A-Z) and lowercase (a-z) English letters.
// Digits (0-9).
// Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
// Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
// The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots.

// Example of valid email id

// mysite@ourearth.com
// my.ownsite@ourearth.org
// mysite@you.me.net
// Example of invalid email id

// mysite.ourearth.com [@ is not present]
// mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
// @you.me.net [ No character before @ ]
// mysite123@gmail.b [ ".b" is not a valid tld ]
// mysite@.org.org [ tld can not start with dot "." ]
// .mysite@mysite.org [ an email should not be start with "." ]
// mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
// mysite..1234@yahoo.com [double dots are not allowed]