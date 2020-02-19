const express = require("express");
const sanitize = require("mongo-sanitize");
const { check, validationResult } = require("express-validator");
const multer = require("multer");

// Def storage obj for images:
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads/");
  },
  filename: (req, file, callback) => {
    fileExtension = file.originalname.split(".")[1]; // get file extension from original file name
    callback(null, file.fieldname + "." + fileExtension);
  }
});

// Image filter for types, return the file if correct type, else not.
const fileFilter = (req, file, callback) => {
  const mimetypeArr = ["image/jpeg", "image/png", "image/gif"];
  if (mimetypeArr.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

const Park = require("../../models/Park");

const router = express.Router();

// ---------- For Dev purposes -------------

/*
 * @route POST api/park/add
 */
router.post("/add", (req, res) => {
  const newPark = new Park({
    project_title: sanitize(req.body.project_title),
    project_organizer: sanitize(req.body.project_organizer),
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
router.put(
  "/update/:id",
  upload.fields([
    // Midleware for multer uploade
    { name: "screen_1", maxCount: 1 },
    { name: "screen_2", maxCount: 1 }
  ]),
  (req, res) => {
    let id = sanitize(req.params.id);
    Park.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          // Props to update
          project_title: sanitize(req.body.project_title),
          project_organizer: sanitize(req.body.project_organizer),
          ledStrips: sanitize(req.body.ledStrips),
          ledBoxes: sanitize(req.body.ledBoxes),
          screen_1: req.files["screen_1"][0].path,
          screen_2: req.files["screen_2"][0].path
        }
      },
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
  }
);

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
