import mongoose from 'mongoose';

export const workoutSchema = new mongoose.Schema({
    title: { type: String, enum: ["Musculação", "Crossfit", "Funcional", "Pilates"], required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    duration: { type: Number, enum: [30, 60, 90], required: true, trim: true },
});

export const Workout = mongoose.model('Workout', workoutSchema);