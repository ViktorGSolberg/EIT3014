const express = require("express");
const sanitize = require("mongo-sanitize");

const Park = require("../../models/Park");

const router = express.Router();

/*
 *  @route PUT api/park/update
 *  @param :id api/park/<object id>
 */

router.put("/update/:id", (req, res) => {
  let id = sanitize(req.params.id);
  let park = Park.where({
    id: id
  });
  park
    .findOneAndUpdate({
      ledStrips: req.body.ledStrips,
      ledBoxes: req.body.ledBoxes,
      screens: req.body.screens
    })
    .setOptions({ new: true })
    .then(items => res.json(items));
});

/*
 *  @route GET api/park
 *  @param :id? (Optional) api/park/<object id>
 */
router.get("/:id?", (req, res) => {
  let id = sanitize(req.query.id);
  if (id) {
    Park.find({ id: id }).then(items => res.json(items));
  }
  Park.find({}).then(items => res.json(items));
});
