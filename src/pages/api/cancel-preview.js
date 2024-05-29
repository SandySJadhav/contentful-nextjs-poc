export default async function handler(req, res) {
  const { redirect } = req.query;

  res.clearPreviewData();
  res.redirect(redirect || '/');
}
