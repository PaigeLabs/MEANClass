var speakers = require('./controllers/speakerCtrl');

module.exports = function(router){

    router.route('/speakers')
        .get(speakers.List)
        .post(speakers.Create);

    router.route('/speakers/:id')
        .get(speakers.GetDetails)
        .put(speakers.Save);
};