const express = require("express");
const router = express.Router();
const { createUser } = require("./create");
const { sendError } = require("../../utils/error");
router.get(`/test`, async (req, res) => {
  res.send("user api successful");
});

router.post(`/create`, async (req, res) => {
  try {
    let { fullname, zipcode } = req.body;
    let payload = { fullname, zipcode };
    await createUser(payload);

    res.send("user created");
  } catch (error) {
    sendError(error, res);
  }
});

router.get(`/list`, async (req, res) => {});

router.get(`/read/`, async (req, res) => {});

router.patch(`/edit/`, async (req, res) => {
  try {
  } catch (error) {}
});

router.put(`/update/`, async (req, res) => {
  try {
  } catch (error) {}
});
router.delete(`/drop`, async (req, res) => {});

module.exports = router;
