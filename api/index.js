export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  const body = req.body || {}; // страховка

  const response = {
    version: body.version || "1.0",
    session: body.session || { session_id: "default", message_id: 0 },
    response: {
      text: "YAHAHAHA, я жив и ору прямо из Vercel!",
      end_session: false
    }
  };

  res.status(200).json(response);
}
