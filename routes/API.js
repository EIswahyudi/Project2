// Routes
// homepage:
// get all lounges for display
var db = require("../models");
module.exports = function (app) {
    // get all lounges for display

    app.get("/api/lounges/", function (req, res) {

        db.lounge.findAll({}).then(function (dbLounge) {
            res.json(dbLounge);
        });
    });
    // get a lounge by name
    app.get("/api/lounges/:name", function (req, res) {
        db.lounge.findAll({
            where: {
                category: req.params.name
            }
        })
            .then(function (dbLounge) {
                res.json(dbLounge);
            });
    });


    // add a new lounge
    app.post("api/lounges", function (req, res) {
        db.lounge.create({
            name: req.body.name,
            // created: req.user.id
        }).then(function (dbLounge) {
            res.json(dbLounge)
        });
    });

    // create a playlist
    app.post("api/playlists", function (req, res) {
        db.playlist.create({
            lounge_id: req.lounge.id
        }).then(function (dbPlaylist) {
            res.json(dbPlaylist)
        })
    });

    // add a song to a playlist

    // add a new user
    app.post("/api/users", function (req, res) {
        db.user.create({
            username: req.body.username,
            password: req.body.password
        }).then(function (dbUser) {
            res.json(dbUser)
        });
    });
    // get all users in a lounge
    app.get("/api/lounge/:id", function (req, res) {

        db.user.findAll({
            include: [{
                model: session,
                where: {
                    lounge_id: req.params.id
                }
            }],
        }).then(function (dbSession) {
            res.json(dbSession);
        });
    });
    // get all users
    app.get("/api/users", function (req, res) {

        db.user.findAll({}).then(function (dbUser) {
            res.json(dbUser);
        });
    });
    // get one lounge by id (from click)
    app.get("/api/lounges/:id", function (req, res) {
        db.lounge.findOne({
            where: {
                id: req.params.id
            },
            include: [db.user]
        }).then(function (dbLounge) {
            res.json(dbLounge);
        });
    });



    // add a song to the playlist
    app.post("/api/playlist", function (req, res) {
        db.playlist.add({
            Song:
            {
                title: req.body.title,
                source: req.body.source,
                votes: req.body.source,
                // user_id: req.params.id
            }
        }).then(function (dbPlaylist) {
            res.json(dbPlaylist)
        });
    });
    // user adds a song
    app.post("/api/songs", function (req, res) {
        db.song.create({
            title: req.body.title,
            source: req.body.source,
            votes: req.body.votes,
            // user_id: req.params.user_id
        })
            .then(function (dbSong) {
                res.json(dbSong);
            });
    });

    // title: req.body.title,
    // source: req.body.source,
    // votes: req.body.votes,
    // // user_id: req.params.user_id

    app.get("/api/songs", function (req, res) {

        db.song.findAll({}).then(function (dbSong) {
            res.json(dbSong);
        });
    });

    // app.put(Song.increment(['votes', '1'], { where: { id: song_id } }));
    // app.put(Song.decrement(['votes', '1'], { where: { id: song_id } }));


};
