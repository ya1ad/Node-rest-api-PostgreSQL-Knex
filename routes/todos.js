const express = require("express");
const router = express.Router();
const queries = require("../db/qurey");

router.get("/", (req, res) => {
  queries.getAll().then(showData => {
    res.send(showData);
  });
});

router.get("/:id", (req, res) => {
  queries.getOne(req.params.id).then(showData => {
    res.send(showData);
  });
});

router.post("/", (req, res) => {
  queries.create(req.body).then(showData => {
    res.send(showData[0]);
  });
});

router.put("/:id", (req, res) => {
  queries.updateData(req.params.id, req.body).then(showData => {
    res.send(showData);
  });
});

router.delete("/:id", (req, res) => {
  queries.deleteData(req.params.id).then(showData => {
    res.send("deleted: true");
  });
});

module.exports = router;
