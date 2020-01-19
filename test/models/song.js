module.exports = function (sequelize, DataTypes) {
    var Song = sequelize.define("song", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            },

            source: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            source_link: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            vote: {
                type: DataTypes.INTEGER,
            },

            

            user_id: {
                type: DataTypes.INTEGER,
                references: 'users',
                referencesKey: 'id'
            },
        
        },

    });

    Song.associate = (models) => {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Song.belongsTo(models.user);
        Song.belongsTo(models.lounge, { through: models.playlist });

    };

    return Song;
};
