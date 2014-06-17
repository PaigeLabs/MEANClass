var mongo = require('mongodb'),
    q = require('q'),
    mongoDb = mongo.MongoClient,
    BSON = mongo.BSONPure,
    devDb = 'mongodb://localhost/kcdc';

exports.List = function(){
    var deferred = q.defer();
    mongo.connect(process.env.MONGOLAB_URI || devDb, function(err, db){
        if(err){
            return deferred.reject(err);
        }

        db.collection('speakers').find().toArray(function(err, speakers){
            if(err){
                return deferred.reject(err);
            }
            return deferred.resolve(speakers);
        });
    });

    return deferred.promise;
};

exports.FindById = function(id){
  var deferred = q.defer();

    mongo.connect(process.env.MONGOLAB_URI || devDb, function(err, db){
        if(err){
            return deferred.reject(err);
        }

        var o_id = new BSON.ObjectID(id);
        db.collection('speakers').findOne({_id:o_id}, function(err, speaker){
            if(err){
                return deferred.reject(err);
            }
            return deferred.resolve(speaker);
        });
    });

  return deferred.promise;
};
