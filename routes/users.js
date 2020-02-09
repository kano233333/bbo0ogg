var express = require('express');
var router = express.Router();
var db = require('../db/db');
var ObjectId = require('mongodb').ObjectId;
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addEssay', function(req, res, next){
  let _body = req.body;
  let o = {
    title: _body.title,
    tag: _body.tag,
    content: _body.content,
  };
  if( _body.type == 'add' ){
    o.time = _body.time;
    db.insertOne('essay', o, (static, result) => {
      res.send({ static: static })
    })
  }else if( _body.type == 'revice' ){
    o._id = _body._id;
    db.update('essay', o, (static, result) => {
      res.send({ static: static })
    })
  } else {
    res.send({ static: 0 })
  }
});

router.post('/getEssay', function(req, res, next){
  let _body = req.body;
  let _data = {
    data: {},
    skip: 20 * (_body.page - 1),
    limit: 20
  };
  db.find('essay', _data, (static, result) => {
    res.send({
      static: static,
      data: result
    })
  })
})

router.post('/getEssayDetail', function(req, res, next){
  let _body = req.body;
  let _data = {
    _id: _body._id
  };
  db.findOne('essay', _data, (static, result) => {
    res.send({
      static: static,
      data: result
    })
  })
})

router.post('/getEssayTag', function(req, res, next){
  let _body = req.body;
  let _data = {
    data: {},
    skip: 20 * (_body.page - 1),
    limit: 20,
    field: 'tag'
  }
  db.findTagArr('essay', _data, (static, result) => {
    res.send({
      static: static,
      data: result
    })
  })
})

router.post('/getTags', function(req, res, next){
  // db.find('blog','')
})

module.exports = router;
