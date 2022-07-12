const Exercise = require('../models/exercise/top-exercise-model')





// exports.querySearch = async (req, res) => {
// 	// const  { query } = req.query;
//     // const keys = ["name", "joint"]


//     // const name = req.params.name;
//     // const value = req.params.value;
//     // const query = {};
//     // query[name] = value;

//     // Exercise.findOne({"name": query}, )

// 	try {
       
// 		const exercises = await Exercise.find
//         ({ $regEx: query  });

// 		if (!exercises.length > 0) {
// 			exercises = await Exercise.find({});
// 		}
// 		res.json({ exercises });
//         console.log('this is the query:' + query)

// 	} catch (err) {
// 		console.log(err, 'filter Controller.querySearch error');
// 		res.status(500).json({
// 			errorMessage: 'Please try again later',
// 		});
// 	}
// };