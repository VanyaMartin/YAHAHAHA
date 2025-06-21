export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  const body = req.body || {};
  const session = body.session || {};

  const response = {
    version: "1.0",
    session: {
      session_id: session.session_id || "default",
      message_id: session.message_id || 0,
      user_id: session.user_id || "anonymous_user"
    },
    response: {
      text: " ",
      tts: " ",
      end_session: false,
      directives: [
        {
          type: "AudioPlayer.Play",
          audio_item: {
            stream: {
              url: "https://alice-mp3-skill.vercel.app/Neverlove.mp3",
              offset_ms: 0
            }
          }
        }
      ]
    }
  };

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(response);
}
