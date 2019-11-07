require('dotenv').config();

// const DB_USER="db_user_platzivideos"
// const DB_PASSWORD="jhonleider15"
// const DB_HOST="cluster0-efbgv.mongodb.net"
// const DB_NAME="platzivideos_db"

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
  defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
  publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
  adminApiKeyToken: process.env.ADMIN_API_KEY_TOKEN,


  // dev: process.env.NODE_ENV !== 'production',
  // port: process.env.PORT || 3000,
  // cors: process.env.CORS,
  // dbUser: DB_USER,
  // dbPassword: DB_PASSWORD,
  // dbHost: DB_HOST,
  // dbName: DB_NAME
}
//console.log(config);
module.exports = { config };