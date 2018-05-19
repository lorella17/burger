// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        connection.query('SELECT * FROM '+ tableInput +';', function (err, result) {
            if (err) throw err;
            cb(result)

        })
    },


    updateOne: function(tableinput, condition, cb) {
        connection.query('UPDATE '+tableInput+'; SET devoured = true WHERE id = '+condition+'; ',
            function (err, result) {
                if (err) throw err;
                cb(result);
            })

    },

    create: function (tableInput, val, cb) {
        connection.query("INSERT INTO "+tableInput+" (burger_name) values ('"+val+"');" , function(err,result){
            if(err)throw err;
            cb(result);
    })

    }

};


module.exports = orm;