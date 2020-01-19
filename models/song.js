module.exports = function (sequelize, DataTypes) {
    var Song = sequelize.define("song", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },
        },

            source: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            

            vote: {
                type: DataTypes.INTEGER,
            },



          


    });

    Song.associate = (models) => {
        
        Song.belongsTo(models.user);
        Song.belongsTo(models.lounge, { through: models.playlist });

    };

    return Song;
};
