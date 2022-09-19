const express = require("express");
const router = express.Router();
const { createUser } = require("./create");
const { updateUser } = require("./update");
const { listUsers } = require("./read");
const { dropUser } = require("./drop");
const { sendError } = require("../../utils/error");
const axios = require("axios").default;
router.get(`/test`, async (req, res) => {
  res.send("user api successful");
});

const getOpenWeatherMap = async (lat, lng) => {
  try {
    let API_key = "7afa46f2e91768e7eeeb9001ce40de19";
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`;
    let res = await axios.get(api);
    return res.data;
  } catch (error) {
    return;
  }
};

router.post(`/create`, async (req, res) => {
  try {
    let { fullname, zipcode, lng, lat } = req.body;
    let gotOpenWeatherMap = await getOpenWeatherMap(lat, lng);
    let payload = {
      fullname,
      zipcode,
      lng,
      lat,
      timezone: gotOpenWeatherMap.timezone,
      raw: JSON.stringify(gotOpenWeatherMap),
    };

    let id = req.body.id;
    if (id) {
      await updateUser(payload, id);
    } else {
      id = await createUser(payload);
    }

    let output = { ...payload, id };

    res.send(output);
  } catch (error) {
    sendError(error, res);
  }
});

router.get(`/list`, async (req, res) => {
  try {
    let output = await listUsers();
    res.send(output);
  } catch (error) {
    sendError(error, res);
  }
});

router.delete(`/drop/:id`, async (req, res) => {
  try {
    let { id } = req.params;

    await dropUser(id);

    let output = { id };

    res.send(output);
  } catch (error) {
    sendError(error, res);
  }
});

module.exports = router;
