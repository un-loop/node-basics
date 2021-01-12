import path from "path";
import fs from "fs";
import rootPath from 'app-root-path';

const templateRouter = async (req, res, next) => {
  console.log(req.path);
  let filePath = path.join(rootPath.path, 'client', req.path);

  try {
    const stat = await fs.promises.stat(filePath);
    
    if (stat.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
  } catch {
    next();
  }

  const content = await fs.promises.readFile(filePath);
  res.send(content.toString()).end();
};

export default templateRouter;