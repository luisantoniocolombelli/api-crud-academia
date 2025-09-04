import { z } from 'zod';

export const createMemberSchema = z.object({
    name: z.string().required().min(1).max(100).trim(),
    email: z.email().required().min(5).max(100).trim().toLowerCase(),
    phone: z.phone().required(),
    address: z.string().required().min(5).max(200).trim(),
    status: z.enum(['ativo', 'inativo']).default('ativo').required(),
    workout: z.enum(["Musculação", "Crossfit", "Pilates", "Funcional"]).required(),
});

export const updateMemberSchema = z.object({
    name: z.string().min(1).max(100).trim().optional(),
    email: z.email().min(5).max(100).trim().toLowerCase().optional(),
    phone: z.phone().optional(),
    address: z.string().min(5).max(200).trim().optional(),
    status: z.enum(['ativo', 'inativo']).default('ativo').optional(),
    workout: z.enum(["Musculação", "Crossfit", "Pilates", "Funcional"]).optional(),
});