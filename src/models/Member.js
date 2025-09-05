import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: Number, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    status: { type: String, enum: ['ativo', 'inativo'], default: 'ativo' },
    workout: { type: String, enum: ['Musculação', 'Crossfit', 'Pilates', 'Funcional'], required: true }
}, {
    timestamps: true
});

export const Member = mongoose.model('Member', memberSchema);