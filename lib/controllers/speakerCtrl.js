var q = require('q'),
    speakers = require('../data/speakerRepo');

function speakerCtrl(){

    var list = function(req, res, next){
            speakers.List()
                .then(function(data){
                    res.json(data);
                })
                .fail(function(err){
                    console.log(err);
                    res.send(500, {'error': 'We\'re sorry, there was a problem retrieving the speaker list.'} );
                });
        },
        getDetails = function(req,res) {
            speakers.FindById(req.params.id)
                .then(function(speaker){
                    res.json(speaker);
                })
                .fail(function(err){
                    console.log(err);
                    res.send(500, {'error':'We\'re sorry, we were unable to retrieve the requested speaker.'});
                })
        },
        save = function(req,res){
            res.json({'message': 'Saving speaker'});
        },
        create = function(req,res){
            res.json({'message': 'Creating new speaker'});
        };

    return {
        List: list,
        GetDetails: getDetails,
        Save: save,
        Create: create
    }
}

module.exports = speakerCtrl();


