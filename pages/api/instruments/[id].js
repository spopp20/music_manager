import dbConnect from '../../../utils/dbConnect'
import Instrument from '../../../models/Instrument'

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const instrument = await Instrument.findById(id)
        if (!instrument) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: instrument })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const instrument = await Instrument.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!instrument) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: instrument })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE' /* Delete a model by its ID */:
      try {
        const deletedInstrument = await Instrument.deleteOne({ _id: id })
        if (!deletedInstrument) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}
