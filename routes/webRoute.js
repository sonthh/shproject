const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('public/index', {
    title: 'codershare.com',
    skills: [
      'Spring boot', 'Nodejs', 'Reactjs', 'Angular', 'Laravel'
    ],
    myName: 'Son H.H. Tran'

  });
});


module.exports = router;
