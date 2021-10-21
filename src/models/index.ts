import { sequelize } from '../utils/database'
import UserModel from './user.model'
//初始化数据
sequelize.sync({ force: true }).then(() => {
  const user = UserModel.build({ username: 'vaechy', password: 'chy965162422', email: '76763229@qq.com'})
  user.save()
})
export {
  UserModel,
}