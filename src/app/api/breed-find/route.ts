import { NextRequest } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export const uploadImage = async (file: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file, (error: any, result: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.secure_url);
        return result.secure_url;
      }
    });
  });
};

export async function POST(req: any) {
  try {
    const formData = await req.json();
    const imgurl = await uploadImage(formData.data);
    // console.log(imgurl)
    // return false

    const response = await fetch(
      "https://www.nyckel.com/v1/functions/755qwury0xy9wz2j/invoke",
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          "content-type": "application/json",
          pragma: "no-cache",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Windows"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
          cookie:
            "__hstc=85920390.4c9a600008a8eeddcc28756a9fdc45de.1720066989450.1720066989450.1720066989450.1; hubspotutk=4c9a600008a8eeddcc28756a9fdc45de; __hssrc=1; __hssc=85920390.1.1720066989450; _gcl_au=1.1.1455185915.1720066989; mp_6b915ea0807e6070ede307e4191979e9_mixpanel=%7B%22distinct_id%22%3A%20%22%24device%3A1907bfb5e241a0b-0ef70b37124f1f-26001f51-100200-1907bfb5e241a0b%22%2C%22%24device_id%22%3A%20%221907bfb5e241a0b-0ef70b37124f1f-26001f51-100200-1907bfb5e241a0b%22%2C%22%24search_engine%22%3A%20%22google%22%2C%22%24initial_referrer%22%3A%20%22https%3A%2F%2Fwww.google.com%2F%22%2C%22%24initial_referring_domain%22%3A%20%22www.google.com%22%7D%2C%22__mpus%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpr%22%3A%20%5B%5D%2C%22__mpap%22%3A%20%5B%5D%7D; _uetsid=1ea5d29039bd11ef96159d68b3fd2d79; _uetvid=1ea5fd4039bd11efac3ce577339a6b24; _ga_5D9H6R1VDB=GS1.1.1720066989.1.0.1720066989.60.0.0; _ga=GA1.1.1337098858.1720066990",
          Referer:
            "https://www.nyckel.com/pretrained-classifiers/dog-breed-identifier/",
          "Referrer-Policy": "strict-origin-when-cross-origin",
        },
        body: JSON.stringify({ data: imgurl }),
        method: "POST",
      }
    );

    const data = await response.json();
    // console.log(data);

    return new Response(
      JSON.stringify({ status: "success", img: imgurl, result: data }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error: any) {
    console.error(error);
    return new Response(
      JSON.stringify({ status: "error", error: error.message }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
