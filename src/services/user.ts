import IUser from '../shared/interface/IUser'
import { UserModel } from '../models'
//Inquiry user according to user name
export async function findCmsUserByName(username: string): Promise<IUser | null>{
  const user = await UserModel.findOne({
    where: {
      username
  }})
  return user
}
//Query all users
export async function findAllCmsUsers(): Promise<IUser[]>{
  const users = await UserModel.findAll()
  return users
}
