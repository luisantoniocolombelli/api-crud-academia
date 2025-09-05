import { z } from 'zod';
import { createMemberSchema, updateMemberSchema } from '../schemas/memberSchema.js';
import memberService from '../services/memberService.js';

const handleRequest = async (serviceFunction, res, successStatus, ...args) => {
    try {
        const result = await serviceFunction(...args);
        if (result === undefined) {
            return res.status(204).send();
        } res.status(successStatus).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao processar requisição', error: error.message });
    }
};

const handleZodValidation = (schema, req, res, serviceCall) => {
    try {
        const validatedData = schema.parse(req.body);
        serviceCall(validatedData);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ message: 'Dados de entrada inválidos', errors: error.issues.map(issue => ({path: issue.path.join('.'), message: issue.message}))});
        } res.status(500).json({ message: 'Erro ao processar requisição', error: error.message });
    }
};


export const createMember = async(req, res) => {
    handleZodValidation(createMemberSchema, req, res, (validatedData) => {
        handleRequest(memberService.createMember, res, 201, validatedData);
    });
};

export const getAllMembers = async(req, res) => {
    await handleRequest(memberService.getAllMembers, res, 200);
};

export const getMemberById = async(req, res) => {
    await handleRequest(memberService.getMemberById, res, 200, req.params.id);
};

export const updateMember = async(req, res) => {
    handleZodValidation(updateMemberSchema, req, res, (validatedData) => {
        handleRequest(memberService.updateMember, res, 200, req.params.id, validatedData);
    });
};

export const deleteMember = async(req, res) => {
    await handleRequest(memberService.deleteMember, res, 204, req.params.id);
};

const memberController = {
    createMember,
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember,
};

export default memberController;