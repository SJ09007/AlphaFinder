const express = require("express");
const router = express.Router();
const { createItem, getAllItems, getFoundItems, getLostItems, getMyItemsPosted, getMyPostedItemsFound, getMyPostedItemsLost, getItemsPostedOnDate, update_status } = require("../controllers/itemController");
const isauth = require("../service/userAuth");


router.route("/create").post(isauth, createItem);
router.route("/getall").get(isauth, getAllItems);
router.route("/getfound").get(isauth, getFoundItems);
router.route("/getlost").get(isauth, getLostItems);
router.route("/getmyposted").get(isauth, getMyItemsPosted);
router.route("/getmypostedfound").get(isauth, getMyPostedItemsFound);
router.route("/getmypostedlost").get(isauth, getMyPostedItemsLost);
router.route("/getondate/:date").get(isauth, getItemsPostedOnDate);
router.route("/updatestatus/:id").put(isauth, update_status);



module.exports = router;