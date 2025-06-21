export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  const body = req.body || {};
  const session = body.session || {};

  const response = {
    version: body.version || "1.0",
    session: {
      session_id: session.session_id || "default",
      message_id: session.message_id || 0,
      user_id: session.user_id || "anonymous_user"
    },
    response: {
      text: "YAHAHAHA, я жив и ору прямо из Vercel!",
      end_session: false
    }
  };

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(response);
}
