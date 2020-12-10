import mongoose from 'mongoose'

/* InstrumentSchema will correspond to a collection in your MongoDB database. */
const InstrumentSchema = new mongoose.Schema({
  name: {
    /* The name of this Instrument */
    type: String,
    required: [true, 'Please provide a name for this Instrument.'],
    maxlength: [30, 'Name cannot be more than 30 characters'],
  },
  folder: {
    /* The owner of this Instrument */
    type: String,
    required: [true, "Please provide the Instrument folder name."],
    maxlength: [30, "Owner's Name cannot be more than 30 characters"],
  }
})

export default mongoose.models.Instrument || mongoose.model('Instrument', InstrumentSchema)
//const Instrument = mongoose.model('Instrument', InstrumentSchema);

//export default Instrument;