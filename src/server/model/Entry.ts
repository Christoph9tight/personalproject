import mongoose, { Document, Schema } from "mongoose";

export interface IEntry extends Document {
  test: string;
  date: Date;
}

const EntrySchema: Schema = new Schema({
  text: { type: String, required: false },
  date: { type: Date, required: false },
});

export default mongoose.model<IEntry>("Entry", EntrySchema);
