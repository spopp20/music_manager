import mongoose from 'mongoose';

// Set `trim: true` on every string path by default
mongoose.Schema.Types.String.set('trim', true);

/* SongSchema will correspond to a songs collection in your MongoDB database. */
const SongSchema = new mongoose.Schema(
  {
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
    start_key: {
      /* The starting key this Song */
      type: String,
      maxlength: [40, 'Start Key cannot be more than 40 characters'],
    },
    begins_with: {
      /* The starting words for this Song */
      type: String,
      maxlength: [60, 'Begins with cannot be more than 60 characters'],
    },
    begins_spanish: {
      /* The starting words in spanish for this Song */
      type: String,
      maxlength: [60, 'Begins spanish cannot be more than 60 characters'],
    },
    tag: {
      /* The Song collection it belongs to */
      type: String,
      maxlength: [20, 'Tag cannot be more than 20 characters'],
    },
    note: {
      /* The starting words in spanish for this Song */
      type: String,
      maxlength: [40, 'Note cannot be more than 40 characters'],
    },
  },
  { timestamps: true },
);

SongSchema.methods.findByTitle = function (title, callback) {
  return this.find(
    {
      title: new RegExp(title, 'i'),
    },
    callback,
  );
};

SongSchema.methods.findByTitleStart = function (start, callback) {
  return this.find(
    {
      title: new RegExp('^' + start, 'i'),
    },
    callback,
  );
};

SongSchema.methods.findByTag = function (tag, callback) {
  return this.find(
    {
      tag: new RegExp(tag, 'i'),
    },
    callback,
  );
};

export default mongoose.models.Song || mongoose.model('Song', SongSchema);
