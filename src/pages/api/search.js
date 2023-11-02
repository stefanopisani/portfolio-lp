export default async function handler(req, res) {
  const options = JSON.parse(req.body);

  const params = {
    ...options,
  };

  const paramString = Object.keys(params)
    .map((key) => `${key}=${encodeURIComponent(params[key])}`)
    .join("&");

  const results = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/search?${paramString}`,
    {
      headers: {
        //@ts-ignore
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ":" +
            process.env.CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }
  ).then((r) => r.json());
  res.status(200).json({
    ...results,
  });
}
