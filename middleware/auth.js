export default (req, res, next) => {
  if (req.query.auth !== "true") {
    res.status(403).send("Not Authorized").end();
  } else {
    next();
  }
}