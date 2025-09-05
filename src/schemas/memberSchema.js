import { z } from 'zod';

export const createMemberSchema = z.object({
    name: z.string().nonempty().min(1).max(100).trim(),
    email: z.email().nonempty().min(5).max(100).trim().toLowerCase(),
    phone: z.string().nonempty(),
    address: z.string().nonempty().min(5).max(200).trim(),
    status: z.enum(['ativo', 'inativo']).default('ativo'),
    workout: z.enum(['Musculação', 'Crossfit', 'Pilates', 'Funcional']),
});

export const updateMemberSchema = z.object({
    name: z.string().min(1).max(100).trim().optional(),
    email: z.email().min(5).max(100).trim().toLowerCase().optional(),
    phone: z.string().optional(),
    address: z.string().min(5).max(200).trim().optional(),
    status: z.enum(['ativo', 'inativo']).default('ativo').optional(),
    workout: z.enum(['Musculação', 'Crossfit', 'Pilates', 'Funcional']).optional(),
});