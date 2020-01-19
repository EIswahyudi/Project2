module.exports = function(sequelize, DataTypes) {
    var Session = sequelize.define("session", {
        // user_id: {
        //     type: DataTypes.INT,
        //     // references: 'users',
        //     // referencesKey: 'id'
        // },
        // lounge_id: {
        //     type: DataTypes.INT,
        //     // references: 'lounge',
        //     // referencesKey: 'id'
        // },
        active: DataTypes.BOOLEAN
    });
  
    // Session.associate = function(models) {
    //   // We're saying that a Post should belong to an Author
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Session.hasMany(models.User);
    //   Session.hasMany(models.Lounge);

    // };
  
    return Session;
  };



  