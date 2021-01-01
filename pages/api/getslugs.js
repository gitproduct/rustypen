import data from '../../data';


export default async(req, res) => {
  const content = await data.getAllPostHeader();
  res.statusCode = 200
  res.json(content)
};