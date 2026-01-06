// api/set-color.js
export default async function handler(req, res) {
  const { hex } = req.body;
  const cloudId = process.env.HOMEY_CLOUD_ID;

  // We encode the hex so #FF0000 becomes %23FF0000
  const encodedHex = encodeURIComponent(hex);
  const homeyUrl = `https://webhook.homey.app/${cloudId}/set_hex_color?tag=${encodedHex}`;

  try {
    const result = await fetch(homeyUrl);
    res.status(200).json({ success: true, colorSent: hex });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
