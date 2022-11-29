const csvtojson = require('csvtojson');
const mysql = require('mysql');

// Database credentials
const hostname = 'your rds endpoint';
username = 'root';
password = 'yourpassword';
databsename = 'yourdb';

// Establish connection to the database
var con = mysql.createConnection({
  host: hostname,
  user: username,
  password: password,
  database: databsename,
});

const initialize = async () => {
  //======================================================
  // [example, Follow readme]
  //======================================================
  var fileName = './file source';

  await csvtojson()
    .fromFile(fileName)
    .then((source) => {
      for (var i = 0; i < source.length; i++) {
        var name = source[i]['name'];

        var insertStatement = `INSERT INTO social_types(name) values(?)`;
        var items = [name];

        con.query(insertStatement, items, (err, results, fields) => {
          if (err) {
            //console.log('Unable to insert item at row ', i + 1);
            return console.log(err);
          }
        });
      }
      console.log('social_types is successfully inserted');
    });

  //======================================================
  // [happin_data_dummy - users.csv]
  //======================================================
  fileName = 'csvs/happin_data_dummy - users.csv';

  await csvtojson()
    .fromFile(fileName)
    .then((source) => {
      for (var i = 0; i < source.length; i++) {
        var social_id = source[i]['social_id'],
          social_type_id = source[i]['social_type_id'],
          email = source[i]['email'],
          username = source[i]['username'],
          gender = source[i]['gender'],
          age = source[i]['age'],
          profile_image = source[i]['profile_image'];

        var insertStatement = `
        INSERT INTO users (
          social_id,
          social_type_id,
          email,
          username,
          gender,
          age,
          profile_image
        ) values (?,?,?,?,?,?,?)`;

        var items = [
          social_id,
          social_type_id,
          email,
          username,
          gender,
          age,
          profile_image,
        ];

        con.query(insertStatement, items, (err, results, fields) => {
          if (err) {
            return console.log(err);
          }
        });
      }
    });
  console.log('users is successfully inserted');

  //======================================================
  // [happin_data_dummy - pins.csv]
  //======================================================
  var fileName = './happin_data_dummy - pins.csv';
  await csvtojson()
    .fromFile(fileName)
    .then((source) => {
      for (var i = 0; i < source.length; i++) {
        var title = source[i]['title'],
          content = source[i]['content'],
          user_id = source[i]['user_id'],
          pin_image = source[i]['pin_image'];

        var insertStatement = `
      INSERT INTO pins(
        title,
        content,
        user_id,
        pin_image
        )values(?,?,?,?)`;

        var items = [title, content, user_id, pin_image];

        con.query(insertStatement, items, (err, results, fields) => {
          if (err) {
            return console.log(err);
          }
        });
      }
      console.log('pins table is successfully inserted');
    });

  //======================================================
  // [happin_data_dummy - interests.csv]
  //======================================================
  var fileName = './happin_data_dummy - interests.csv';
  await csvtojson()
    .fromFile(fileName)
    .then((source) => {
      for (var i = 0; i < source.length; i++) {
        var interest = source[i]['interest'];

        var insertStatement = `
      INSERT INTO interests(
        interest
        )values(?)`;

        var items = [interest];

        con.query(insertStatement, items, (err, results, fields) => {
          if (err) {
            return console.log(err);
          }
        });
      }
      console.log('interests table is successfully inserted');
    });

  //======================================================
  // [happin_data_dummy - user_interests.csv]
  //======================================================
  var fileName = './happin_data_dummy - user_interests.csv';
  await csvtojson()
    .fromFile(fileName)
    .then((source) => {
      for (var i = 0; i < source.length; i++) {
        var user_id = source[i]['user_id'];
        interest_id = source[i]['interest_id'];

        var insertStatement = `
      INSERT INTO user_interests(
        user_id,
        interest_id
        )values(?,?)`;

        var items = [user_id, interest_id];

        con.query(insertStatement, items, (err, results, fields) => {
          if (err) {
            return console.log(err);
          }
        });
      }
      console.log('user_interests table is successfully inserted');
    });

  //======================================================
  // [happin_data_dummy - stored_pins.csv]
  //======================================================
  var fileName = './happin_data_dummy - stored_pins.csv';
  await csvtojson()
    .fromFile(fileName)
    .then((source) => {
      for (var i = 0; i < source.length; i++) {
        var user_id = source[i]['user_id'];
        pin_id = source[i]['pin_id'];

        var insertStatement = `
      INSERT INTO stored_pins(
        user_id,
        pin_id
        )values(?,?)`;

        var items = [user_id, pin_id];

        con.query(insertStatement, items, (err, results, fields) => {
          if (err) {
            return console.log(err);
          }
        });
      }
      console.log('stored_pins table is successfully inserted');
    });

  //======================================================
  // [happin_data_dummy - boards.csv]
  //======================================================
  var fileName = './happin_data_dummy - boards.csv';
  await csvtojson()
    .fromFile(fileName)
    .then((source) => {
      for (var i = 0; i < source.length; i++) {
        var name = source[i]['name'];
        user_id = source[i]['user_id'];

        var insertStatement = `
      INSERT INTO boards(
        name,
        user_id
        )values(?,?)`;

        var items = [name, user_id];

        con.query(insertStatement, items, (err, results, fields) => {
          if (err) {
            return console.log(err);
          }
        });
      }
      console.log('boards table is successfully inserted');
    });

  //======================================================
  // [happin_data_dummy - custom_boards.csv]
  //======================================================
  var fileName = './happin_data_dummy - custom_boards.csv';
  await csvtojson()
    .fromFile(fileName)
    .then((source) => {
      for (var i = 0; i < source.length; i++) {
        var board_id = source[i]['board_id'];
        pin_id = source[i]['pin_id'];

        var insertStatement = `
      INSERT INTO custom_boards(
        board_id,
        pin_id
        )values(?,?)`;

        var items = [board_id, pin_id];

        con.query(insertStatement, items, (err, results, fields) => {
          if (err) {
            return console.log(err);
          }
        });
      }
      console.log('custom_boards is successfully inserted');
    });

  //======================================================
  // [happin_data_dummy - pin_interests.csv]
  //======================================================
  var fileName = './happin_data_dummy - pin_interests.csv';
  await csvtojson()
    .fromFile(fileName)
    .then((source) => {
      for (var i = 0; i < source.length; i++) {
        var pin_id = source[i]['pin_id'];
        interest_id = source[i]['interest_id'];

        var insertStatement = `
      INSERT INTO pin_interests(
        pin_id,
        interest_id
        )values(?,?)`;

        var items = [pin_id, interest_id];

        con.query(insertStatement, items, (err, results, fields) => {
          if (err) {
            return console.log(err);
          }
        });
      }
      console.log('pin_interests is successfully inserted');
    });
};
initialize();
