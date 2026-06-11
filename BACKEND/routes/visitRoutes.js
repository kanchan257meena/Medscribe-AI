const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const {
  addVisit,
  updateVisit,
  deleteVisit,
} = require("../controllers/visitController");

router.post("/:id/visits", authMiddleware, addVisit);
router.put("/:id/visits/:visitId", authMiddleware, updateVisit);
router.delete("/:id/visits/:visitId", authMiddleware, deleteVisit);

module.exports = router;
