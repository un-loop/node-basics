export default async (req, res) => {
  const result = req.template.replace("${entity}", req.query.entity || 'World');
  res.send(result).end();
};