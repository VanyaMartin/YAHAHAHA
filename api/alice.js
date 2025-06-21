export const config = { api: { bodyParser: true } };

export default async function handler(req, res) {
  console.log("Request method:", req.method);
  console.log("Request body:", req.body);

  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    const body = req.body || {};
    const session = body.session || {};

    const response = {
      version: "1.0",
      session: {
        session_id: session.session_id || "default",
        message_id: session.message_id || 0,
        user_id: session.user_id || "anonymous_user",
      },
      response: {
        text: "Слушай музыку",
        tts: "Слушай музыку",
        end_session: false,
        directives: [
          {
            type: "AudioPlayer.Play",
            audio_item: {
              stream: {
                url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                offset_ms: 0,
              },
            },
          },
        ],
      },
    };

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(response);
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send("Internal Server Error");
  }
}

