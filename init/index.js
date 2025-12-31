const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const Mongo_Url = "mongodb://127.0.0.1:27017/Airnest";
async function main() {
  await mongoose.connect(Mongo_Url);
}

main()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68ccf5aec7ea3d3dfc84aaa5",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data is Initialized");
};

initDB();
// 68c1258e9b055c82734495e3
