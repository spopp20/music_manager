import mongoose from 'mongoose';

// Set `trim: true` on every string path by default
mongoose.Schema.Types.String.set('trim', true);

/* ScoreSchema will correspond to a scores collection in your MongoDB database. */
const ScoreSchema = new mongoose.Schema(
  {
    song: {
      /* The name of this Song */
      type: String,
      required: [true, 'Please provide a name for this Song.'],
      maxlength: [30, 'Name cannot be more than 30 characters'],
    },
    words: {
      /* The words for this Song (mixed language) */
      type: String,
    },
    english: {
      /* The words of the Song in english */
      type: String,
    },
    spanish: {
      /* The words of the Song in spanish */
      type: String,
    },
  },
  { timestamps: true },
);

ScoreSchema.methods.findBySongName = function (songname, callback) {
  var query = this.findOne();

  Song.findBySongName;
};

ScoreSchema.methods.findBySongInstrument = function (song, instrument, callback) {
  var query = { $or: [{ song: song }, { instrument: instrument }] };

  Score.find(query, function (err, data) {
    if (error) {
      return err;
    }
    return data;
  });
};

export default mongoose.models.Score || mongoose.model('Score', ScoreSchema);
