import fs from 'fs';
import path from 'path';
import rootPath from 'app-root-path';

export default async (req, res, next) => {
  console.log(req.path.toLowerCase());
  let filePath = `${rootPath.path}${path.sep}client${path.sep}index.html`;

  switch(req.path.toLowerCase()) {
    case '/admin/':
    case '/admin':
      filePath = `${rootPath.path}${path.sep}client${path.sep}admin${path.sep}index.html`;
  }

  const content = await fs.promises.readFile(filePath);
  
  const contentString = content.toString();

  req.template = contentString;

  next();
};