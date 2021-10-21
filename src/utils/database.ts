import { Sequelize } from 'sequelize-typescript'
import { UserModel } from '../models'
import path from "path"
const { DATABASE_NAME, DATABASE_USER, DATABASE_PASS, DATABASE_HOST, DATABASE_POST } = process.env
const sequelize = new Sequelize({
  host: DATABASE_HOST,
  database: DATABASE_NAME,
  dialect: 'mysql',
  username: DATABASE_USER,
  password: DATABASE_PASS,
  port: parseInt(DATABASE_POST || '3306'),
  models: [path.resolve(__dirname,'../models/*.model.ts'),path.resolve(__dirname,'../models/*.model.js')] // or [Player, Team],
})
try {
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

} catch (error) {
  console.log('data connect error'+error);
  
}
export { sequelize }

