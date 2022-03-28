const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: process.env.DATABASE_DIALECT,
    logging: false
  }
);
sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `[database]: database has been established successfully.`
    );
  } catch (error) {
    console.log({
      message: `[database]: failed to connect.`,
      error: error,
    });
  }
})();

module.exports = sequelize;
