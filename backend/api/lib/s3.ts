import { S3 } from "@aws-sdk/client-s3";
import { prisma } from "@fungi/db";
import mime from "mime-types";

export const endpoint = "https://mio.fungi.clubhouse.mlntcandy.com/";

function makeS3() {
  if (
    !(
      "S3_ACCESS_KEY" in process.env &&
      typeof process.env.S3_ACCESS_KEY === "string"
    )
  )
    throw new Error("S3 credentials not in process.env!");
  if (
    !(
      "S3_SECRET_KEY" in process.env &&
      typeof process.env.S3_SECRET_KEY === "string"
    )
  )
    throw new Error("S3 credentials not in process.env!");

  return new S3({
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    },
    endpoint,
  });
}

const s3 = makeS3();

export async function s3upload(file: File, bucket?: string, fileName?: string) {
  const uploadedImage = await s3.putObject({
    Bucket: bucket ?? "fungi-images",
    Body: file,
    Key: fileName ?? file.name,
  });
  return uploadedImage;
}

export async function createImage(
  file: File,
  bucket: string,
  name?: string,
  source?: string
) {
  const ext = mime.extension(file.type) || "";
  const image = await prisma.image.create({
    data: {
      ext,
      bucket,
      name,
      source,
    },
  });

  await s3upload(file, bucket, `${image.id}.${ext}`);
}
