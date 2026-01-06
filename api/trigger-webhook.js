export default async function handler(request, response) {
  const cloudId = process.env.HOMEY_CLOUD_ID;

  // Use the event name exactly as it appears in your Homey Flow
  const homeyUrl = `https://webhook.homey.app/${cloudId}/lampglu`;

  try {
    // A simple fetch() defaults to GET, which Homey prefers
    const homeyResponse = await fetch(homeyUrl);

    if (homeyResponse.ok) {
      return response.status(200).json({ success: true });
    } else {
      return response.status(500).json({ error: "Homey rejected the request" });
    }
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
