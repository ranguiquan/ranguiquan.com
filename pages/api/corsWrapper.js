import { retrieve_nested_children } from "../../lib/notion/block";

export default async function handler(req, res) {
  const body = req.body;
  switch(req.method) {
    case 'POST': 
      switch (body.type) {
        case 'retrieve_nested_children':
          await retrieve_nested_children(body.data);
          res.status(200).json(body.data);
          return;
      }

  }
  // res.status(400).json({message: 'bad request'})
}