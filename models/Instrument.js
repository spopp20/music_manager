import mongoose from 'mongoose'

// Set `trim: true` on every string path by default
mongoose.Schema.Types.String.set('trim', true);


/* InstrumentSchema will correspond to an instruments collection in your MongoDB database. */
const InstrumentSchema = new mongoose.Schema({
  name: {
    /* The name of this Instrument */
    type: String,
    required: [true, 'Please provide a name for this Instrument.'],
    maxlength: [40, 'Name cannot be more than 40 characters'],
  },
  folder: {
    /* The location of this Instrument */
    type: String,
    required: [true, "Please provide the Instrument folder name."],
    maxlength: [30, "Folder's Name cannot be more than 30 characters"],
  },
}, { timestamps: true })

export default mongoose.models.Instrument || mongoose.model('Instrument', InstrumentSchema)
