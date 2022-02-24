var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET artists listing. */

router.get("/", function(req, res, next) {
  db("SELECT * FROM mvp_artists;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

//get artist by id

router.get("/:id", async (req, res, next) => {
    let { id } = req.params;
  
    try {
      let result = await db(`SELECT * FROM mvp_artists WHERE id = ${id}`);
      let artist = result.data;
      if (artist.length === 0) {
        res.status(404).send({ error: "student not found" });
      } else {
        res.send(artist[0]);
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });


module.exports = router;