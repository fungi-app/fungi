import { endpoint } from "@fungi/api/lib/s3cfg";
// import type { Image } from "@fungi/db";

export const loadImage = (i: any) => ({
  uri: `${endpoint}${i.bucket}/${i.name}.${i.ext}`,
});
