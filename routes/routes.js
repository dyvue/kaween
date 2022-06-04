const express = require("express");
const MGuest = require("../models/guest");
const MMessage = require("../models/message");
const router = express.Router();

// Guests
router.post("/guests", async (req, res) => {
  const data = new MGuest({
    name: req.body.name
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/guests", async (req, res) => {
  try {
    const data = await MGuest.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/guests/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await MGuest.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Messages
router.post("/messages", async (req, res) => {
  const data = new MMessage({
    name: req.body.name,
    message: req.body.message,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/messages", async (req, res) => {
  try {
    const data = await MMessage.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/messages/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await MMessage.findByIdAndDelete(id);
    res.send(`Document with ${data.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;