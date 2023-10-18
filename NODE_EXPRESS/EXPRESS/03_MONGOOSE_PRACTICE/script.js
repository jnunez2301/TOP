const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User')

const mongoDB = `${process.env.MONGODB_URI}`
mongoose.connect(mongoDB);

async function run() {

    /*
        you can also use methods like
        User.findbyId
        User.deleteOne, and so on
        but  you can create your querys like

        const user = await User.where("name").equals("Jhon")
        Like: SELECT * FROM USERS WHERE name="Jhon"
    */
    /* const user = await User.create({ name: "Create", age: 0 }) */
    //BOTH OF THEM ARE THE SAME
    try{
        /* const user = new User({
            name: "Mike",
            age: 24,
            hobbies: ["gaming", "weightlifting"],
            address: {
                address: "Main St",
                city: "Main City"
            },
            email: "test@test.com"
        }) */
        const user = await User.findOne({name: "Mike"})
        user.name = "Jake"
        console.log(user);
        console.log(user.namedEmail);
        await user.save()
    }catch(e){
        console.log(e.message);
    }
}

run()

