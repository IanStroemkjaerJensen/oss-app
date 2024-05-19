import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const suggestionSchema = new Schema(
  {
    title: String,
    description: String,
    labels: [String],
    popularity: Number,
    upvotes: Number,
    downvotes: Number,
  },

  {
    timestamps: true,
  }
);

const Suggestion =
  mongoose.models.Suggestion || mongoose.model("Suggestion", suggestionSchema);
export default Suggestion;
