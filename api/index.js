export default async function handler(req, res) {
  const body = req.body;

  const response = {
    version: body.version,
    session: body.session,
    response: {
      text: "YAHAHAHA, я жив и ору прямо из Vercel!",
      end_session: false
    }
  };

  res.status(200).json(response);
}
