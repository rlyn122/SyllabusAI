import mongoose from 'mongoose';

const syllabus = mongoose.Schema(
  {
    text: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const SyllabusData = mongoose.model('Syllabus', syllabus);