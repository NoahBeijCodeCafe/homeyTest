// Vercel uses standard Node.js request/response objects
export default async function handler(request, response) {
  // 1. Get the secret CloudID from Vercel's environment variables
  const cloudId = process.env.HOMEY_CLOUD_ID;

  // 2. Build the real URL (hidden from the user)
  const homeyUrl = `https://webhook.homey.app/${cloudId}/lampglu`;

  try {
    const homeyResponse = await fetch(homeyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "Vite-App", ...request.body }),
    });

    return response.status(200).json({ success: true });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
