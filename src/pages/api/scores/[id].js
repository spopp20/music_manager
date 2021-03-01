import dbConnect from '~/middleware/dbConnect';
import Score from '~/models/Score';

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const score = await Score.findById(id);
        if (!score) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: score });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'PUT' /* Edit a model by its ID */:
      try {
        const score = await Score.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!score) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: score });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedScore = await Score.deleteOne({ _id: id });
        if (!deletedScore) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
