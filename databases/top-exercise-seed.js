const Exercise = require('../models/exercise/top-exercise-model');
const newSeedData = require('../databases/top-exercise.json')
    console.log(newSeedData);


Exercise.deleteMany({})
.then(()=> {
    return Exercise.collection.insertMany(newSeedData)
})
.then((res) => console.log(res))
.finally(() => {
    process.exit()
});
