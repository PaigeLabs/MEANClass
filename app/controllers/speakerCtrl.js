function speakerCtrl(){

    var list = function(req, res){
            res.json({'message': 'This is a list of all speakers'});
        },
        getDetails = function(req,res) {
            res.json({'message': 'This is the details of the speaker with an id of: ' + req.params.id});
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


