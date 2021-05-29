var express = require('express');
var router = express.Router();
var db = require('../db/db');
var ObjectId = require('mongodb').ObjectId;
var { collection } = require('../setting');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addEssay', function(req, res, next) {
  let _body = req.body;
  let o = {
    title: _body.title,
    tag: _body.tag,
    content: _body.content,
  };
  if (_body.type === 'add') {
    o.time = _body.time;
    db.insertOne(collection, o, (state, result) => {
      res.send({ state, result: {id: result.insertedId} });
    });
  }
  else if (_body.type === 'revice') {
    o._id = _body._id;
    db.update(collection, '$set', o, (state, result) => {
      res.send({ state, result: {id: _body._id} });
    });
  }
  else {
    res.send({ state: 0 });
  }
});

router.post('/getEssay', function(req, res, next){
  let _body = req.body;
  let _data = {
    data: {},
    skip: 20 * (_body.page - 1),
    limit: 20,
    sort: { time: -1 }
  };
  db.find(collection, _data, (state, result) => {
    res.send({state, result});
  });
})

router.post('/getEssayDetail', function(req, res, next){
  let _body = req.body;
  let _data = {
    _id: _body._id
  };
  db.findOne(collection, _data, (state, result) => {
    res.send({state, result});
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
  db.findTagArr(collection, _data, (state, result) => {
    res.send({state, result});
  })
})

router.post('/pushComment', function(req, res, next){
  const _body = req.body;
  const _data = {
    _id: _body._id,
    comment: {
      name: _body.name,
      comment: _body.comment,
      time: _body.time
    }
  };
  db.update(collection, '$push', _data, (state, result) => {
    res.send({state, result});
  });
})

router.post('/deleteEssay', (req, res, next) => {
  const _body = req.body || {};
  const _data = {_id: _body._id};
  db.deleteMany(collection, _data, (state, result) => {
    res.send({state, result});
  });
})

module.exports = router;
