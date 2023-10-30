import { Schema, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    next: {
      type: String,
      trim: true,
    },
    resulst: {
      type: Array,
    },
  },
  {
    id: true,
  }
);

export default models.Task || model("Task", taskSchema);
