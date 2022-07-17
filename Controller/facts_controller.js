function index(req, res) {
 
    res.render('facts/index', {
      facts, // same as profiles: profiles
      name: req.query.name,
      user: req.user
    })
  }
