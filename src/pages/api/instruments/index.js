import dbConnect from '~/middleware/dbConnect';
import Instrument from '~/models/Instrument';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const instruments = await Instrument.find({}); /* find all the data in our database */
        res.status(200).json({ success: true, data: instruments });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const instrument = await Instrument.create(
          req.body,
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: instrument });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
