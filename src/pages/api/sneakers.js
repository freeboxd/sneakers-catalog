// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';

const apiBasePath = process.cwd() + '/src/pages/api';

const sneakerList = JSON.parse(fs.readFileSync(apiBasePath + '/data/sneakers.json', 'utf8'));

export default (req, res) => {
  res.status(200).json(sneakerList)
}
