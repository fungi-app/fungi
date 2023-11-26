import { endpoint } from "@fungi/api/lib/s3cfg";


export const loadImage = (i: any) => ({
  uri: `${endpoint}${i.bucket}/${i.name}.${i.ext}`,
});
