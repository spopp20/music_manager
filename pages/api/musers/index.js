import dbConnect from '../../../middleware/dbConnect'
import User from '../../../models/User'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        var user = await User.create(
          req.body
        )
        
        // Security-wise, you must hash the password before saving it
        const hashedPass = argon2.hash(user.password);
        user.password = hashedPass;

        /* create a new model in the database */
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
