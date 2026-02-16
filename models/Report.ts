import mongoose, { Schema, models } from "mongoose";

const ReportSchema = new Schema(
  {
    token: { type: String, required: true, unique: true },

    category: { type: String, required: true },
    description: { type: String, required: true },

    incidentDate: String,
    incidentTime: String,

    state: { type: String, required: true },
    district: { type: String, required: true },
    policeStation: { type: String, required: true },

    email: String,
    pressure: String,

    evidenceFiles: [String], // store file paths / URLs later

    status: {
      type: String,
      enum: ["submitted", "under_review", "forwarded"],
      default: "submitted",
    },
  },
  { timestamps: true }
);

export const Report = models.Report || mongoose.model("Report", ReportSchema);
