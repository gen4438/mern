const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/record").get((req, res) => {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
});

recordRoutes.route("/record/:id").get((req, res) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").findOne(myquery, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route("/record/add").post((req, response) => {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.person_name,
    position: req.body.person_position,
    level: req.body.person_level,
  };
  db_connect.collection("records").insertOne(myobj, (err, res) => {
    if (err) throw err;
    response.json(res);
  });
});

recordRoutes.route("/update/:id").post((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      person_name: req.body.person_name,
      person_position: req.body.person_position,
      person_level: req.body.person_level,
    },
  };
  db_connect.collection("records").updateOne(myquery, newvalues, (err, res) => {
    if (err) throw err;
    console.log("1 document updated");
    response.json(res);
  });
});

recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myquery, (err, obj) => {
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
