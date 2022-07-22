const Users = require('../models/user/user-model');
const newSeedData = require('../Database/user.json')
    console.log(newSeedData);


Users.deleteMany({})
.then(()=> {
    return Users.collection.insertMany(newSeedData)
})
.then((res) => console.log(res))
.finally(() => {
    process.exit()
});
