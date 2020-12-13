import mongoose from 'mongoose'

// Set `trim: true` on every string path by default
mongoose.Schema.Types.String.set('trim', true);


/* SongSchema will correspond to a songs collection in your MongoDB database. */
const SongSchema = new mongoose.Schema({
  title: {
    /* The name of this Song */
    type: String,
    required: [true, 'Please provide a name for this Song.'],
    maxlength: [30, 'Name cannot be more than 30 characters'],
  },
  arrangement: {
    /* Arrangement notes */
    type: String,
    maxlength: [200, 'Arrangement cannot be more than 200 characters'],
  },
  keys: {
    /* The location of this Song */
    type: [String],
    validate: v => v == null || v.length > 0,
  },
}, { timestamps: true })

export default mongoose.models.Song || mongoose.model('Song', SongSchema)