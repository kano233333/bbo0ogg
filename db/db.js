var settings = require('../setting');
var Db = require('mongodb').Db;
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

var clientOption = { 
  useUnifiedTopology: true,
  useNewUrlParser: true
}
function _connectDB(callback) {
  var url = settings.dburl;
  MongoClient.connect(url, clientOption, function (err, db) {
    if (err) {
      callback(err, null);
      return;
    }
    callback(err, db);
  });
}

exports.insertOne = (collectionName, json, callback) => {
  _connectDB((err, db) => {
    if (err) {
      return;
    }
    db.collection(collectionName).insertOne(json, (err, result) => {
      var state = (!err && result.result.ok === 1) ? 1 : -1;
      callback(state, result);
      db.close();
    });
  });
};

exports.insertMany = function(collectionName,json,callback){
  _connectDB(function(err,db){
    db.collection(collectionName).insertMany(json,function(err,result){
      callback(err,result);
      db.close();
    })
  })
};

exports.deleteMany = (collectionName, json, callback) => {
  json._id = ObjectId(json._id);
  _connectDB((err, db) => {
    db.collection(collectionName).deleteMany(json, (err,result) => {
      callback(err,result);
      db.close();
    })
  });
};

exports.find = function(collectionName,json,callback){
  _connectDB(function(err,db){
    db.collection(collectionName).find(json.data).sort(json.sort).skip(json.skip).limit(json.limit).toArray( (err,result) => {
      if(err == null){
        callback(1,result);
      }else{
        callback(0,result);
      }
      db.close();
    });
  })
};

exports.findOne = function(collectionName,json,callback){
  json._id = ObjectId(json._id);
  _connectDB(function(err,db){
    db.collection(collectionName).findOne(json, (err,result) => {
      if(err == null){
        callback(1,result);
      }else{
        callback(0,result);
      }
      db.close();
    });
  })
};

exports.update = function(collectionName, type , json, callback){
  let _id = ObjectId(json._id);
  delete json._id;
  _connectDB(function(err,db) {
    db.collection(collectionName).update( { _id }, {
      [type]: json
    }, (err,result) => {
      if(err == null){
        callback(1,result);
      }else{
        callback(0,result);
      }
      db.close();
    });
  })
};

exports.findTagArr = function(collectionName, json, callback){
  _connectDB(function(err, db){
    db.collection(collectionName).distinct(json.field, (err, result) => {
      if(err == null){
        let tagArr = result;
        let res = {};
        tagArr.forEach((item, index)=>{
          db.collection(collectionName).find({tag: item}).toArray((err2, tagEssay) => {
            if(err2 == null){
              res[item] = tagEssay;
              if(index == tagArr.length-1){
                callback(1, res);
              }
            }else{
              callback(0, {err: 'error'})
            }
          })
        })
      }else{
        callback(0, {err: 'error'});
      }
      db.close();
    })
  })
};