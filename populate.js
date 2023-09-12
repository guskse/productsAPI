require("dotenv").config();

const connectDB = require("./db/connect");
const Product = require("./models/product");

const jsonProducts = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Success!");
    process.exit(0) //fecha o processo (0) significa sucesso
  } catch (error) {
    console.log(error);
    process.exit(1) //fecha o processo (1) significa erro ocorreu
  }
};

start();
