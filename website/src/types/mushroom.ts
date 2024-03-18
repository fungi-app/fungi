import IImage from "../types/image"
import IFamily from "./family"
import IColor from "./color"

export default interface IMushroom {
  slug: string | null,
  name: string,
  latin_name: string,
  synonymous_names: string[], 
  family: IFamily,
  red_booked: boolean,
  description: string,
  eatable: string,
  have_foot: boolean,
  foot_size_from: number,
  foot_size_to: number,
  foot_type: string,
  foot_color: IColor,
  head_type: string,
  hymenophore: string,
  head_color: IColor,
  created_at: string,
  updated_at: string,
  doubles: string[],
  preview: IImage[],
}
