const express = require("express");
const sanitize = require("mongo-sanitize");
const { check, validationResult } = require("express-validator");

const Park = require("../../models/Park");

const router = express.Router();

// ---------- For Dev purposes -------------

/*
 * @route POST api/park/add
 */
router.post("/add", (req, res) => {
  const newPark = new Park({
    ledStrips: sanitize(req.body.ledStrips),
    ledBoxes: sanitize(req.body.ledBoxes),
    screen_1: sanitize(req.body.screen_1),
    screen_2: sanitize(req.body.screen_2)
  });
  newPark.save().then(items => res.json(items));
});

/*
 * @route DELETE api/park/remove/<object id>
 * @param :id
 */
router.delete("/remove/:id", (req, res) => {
  let id = sanitize(req.params.id);
  Park.findByIdAndRemove(id, (err, obj) => {
    if (err) {
      return res.status(500).send();
    } else {
      const response = {
        message: "Entety successfully deleted",
        id: obj.id
      };
      return res.status(200).send(response);
    }
  });
});

// ---------- End Dev purposes -------------

/*
 *  @route PUT api/park/update
 *  @param :id api/park/<object id>
 */
router.put("/update/:id", (req, res) => {
  let id = sanitize(req.params.id);
  Park.findOneAndUpdate(
    { _id: id },
    req.body,
    { useFindAndModify: false, new: true },
    (err, obj) => {
      if (err) {
        res.status(500).send();
      } else {
        if (!obj) {
          res.status(404).send();
        } else {
          res.send(obj);
        }
      }
    }
  );
});

/*
 *  @route GET api/park
 *  @param :id? (Optional) api/park/<object id>
 */
router.get("/:id?", (req, res) => {
  let id = sanitize(req.params.id);
  if (id) {
    Park.find({ _id: id }).then(items => res.json(items));
  }
  Park.find({}).then(items => res.json(items));
});

module.exports = router;
