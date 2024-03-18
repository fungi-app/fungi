import IImage from "../types/image"
import IUser from "../types/user"

export default interface IPublication {
  slug: string | null,
  title: string,
  content: string,
  preview: IImage,
  author: IUser,
  created_at: Date,
}
