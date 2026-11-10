// api/capi.js - Vercel serverless function
export default async function handler(req, res) {
  const PIXEL_ID = "1827069921781110";
  const ACCESS_TOKEN = "APNA_ACCESS_TOKEN_YAHAN_DALO"; // Events Manager > Settings > Generate Access Token

  const event = req.body; // frontend se ayega
  await fetch(`https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ data: [event] })
  });
  res.status(200).json({success: true});
}
