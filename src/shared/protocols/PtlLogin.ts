// This is a demo code file
// Feel free to delete it
import IUser from "../interface/IUser"
export interface ReqLogin {
  username: string,
  password: string
}

export interface ResLogin {
  code: number,
  message: string,
  data: IUser
}