var express = require('express');
var router = express.Router();
var db = require('../db/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addEssay', function(req, res, next){
  let _body = req.body;
  db.insertOne('essay', _body, (static, result) => {
    res.send({static:static})
  })
});

router.post('/getEssay', function(req, res, next){
  console.log(req.body)
  let _body = req.body;
  let _data = {
    data: {},
    skip: 20 * (_body.page - 1),
    limit: 20
  };
  console.log(_data);
  db.find('essay', _data, (static, result) => {
    res.send({
      static: static,
      data: result
    })
  })
})

module.exports = router;
