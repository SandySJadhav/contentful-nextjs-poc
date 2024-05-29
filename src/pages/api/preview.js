export default async function handler(req, res) {
  const { secret, redirect } = req.query;

  if (secret !== process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData(req.query);
  res.redirect(redirect || '/');
}
