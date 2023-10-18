const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    street: String,
        city: String
})

const userSchema = new mongoose.Schema({
  
    name: String,
    age: {
        type: Number,
        min: 1,
        max: 100,
        //You can bring a min and max
        validate: {
            validator: v => v % 2 === 0,
            //Run validators to make sure the info is correct
            message: props => `${props.value} is not an even number`
        }
    },
    email: {
        type: String,
        minLength: 10,
        //You can give a minlength to a string
        required: true,
        lowerCase: true
    },
    //Make it required and you can also call lowerCase
    createdAt: {
        type: Date,
        inmutable: true,
        //You cannot change this value since its inmutable
        default: () =>{
            Date.now()
        },
        //it can have functions as default values
    },
    updatedAt: Date,
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    //SchemaTypes.ObjectId references to another object based on the id
    hobbies: [String],
    //If not specified it can be an array of anything
    address: addressSchema
    //You can reference other schemas
    })

//You can add methods
userSchema.methods.sayHi = function () {
    console.log(`Hi. My name is ${this.name}`);
}

//You can create your own expresions
userSchema.statics.findByName = function(name){
    return this.find({name: new RegExp(name, "i")})
}

//Same as above but this one just goes on the query
//like userSchema.find().byName("YOUR_NAME")
userSchema.query.byName = function(name){
    return this.where({name: new RegExp(name, "i")})
}

//Works similar by the ones above
// Now you can do it like this 
// console.log(user.namedEmail);
// You don't have to call the object itself
userSchema.virtual('namedEmail').get(function (){
    return `${this.name} <${this.email}>`
})

//Middleware
//Pre before and post after
userSchema.pre('save', function(next){
    this.updatedAt = Date.now()
    next()
})

userSchema.post('save', function(doc, next){
    //doc is the user object
    doc.sayHi()
    next()
})

module.exports = mongoose.model('User', userSchema)