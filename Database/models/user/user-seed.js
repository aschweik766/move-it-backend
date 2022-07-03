const Users = require('../user/user-model');
const newSeedData = require('../user/user.json')
    console.log(newSeedData);





Users.deleteMany({})
.then(()=> {
    return Users.collection.insertMany(newSeedData)
})
.then((res) => console.log(res))
.finally(() => {
    process.exit()
});
