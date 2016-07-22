"use strict";

const Sequelize = require("sequelize");

let seq;
if (process.env.NODE_ENV === "production") {
  seq = new Sequelize(process.env.DB_URL, {
    dialectOptions: {
      ssl: true,
    },
    logging: false,
  });
} else {
  seq = new Sequelize("grappa", "", "", {
    dialect: "sqlite",
    storage: "db/dev-db.sqlite",
    logging: false,
  });
}

module.exports = {
  sequelize: seq,
};
