module.exports = function (sequelize, DataTypes) {
    var Lounge = sequelize.define("lounge", {
        name: DataTypes.STRING,
        // user_id: {
        //     type: DataTypes.STRING,
        //     references: {
        //         model: 'user',
        //         key: 'id'
        //     }
    
        // playlist_id:{
        //     type: DataTypes.INT,
        //     references: "playlist",
        //     referencesKey:'id'
        // }

    });

    Lounge.associate = (models) => {

        Lounge.belongsToMany(models.song, { through: models.playlist });
        //  Lounge.belongsTo(user_id),
        Lounge.belongsToMany(models.user, { through: models.session });
    };
    return Lounge;
};
