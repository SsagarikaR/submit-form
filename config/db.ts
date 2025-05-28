import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("DB connection has been establsihed");
} catch (err) {
  console.log("Error in connecting to DB", err);
}

sequelize
  .sync()
  .then((data) => {
    console.log("databse synced successfully");
  })
  .catch((err) => {
    console.log("error in syncing the database");
  });
