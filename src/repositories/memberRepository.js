import { Member } from '../models/Member.js';
import mongoose from 'mongoose';

const isValidObjectId = (id) => {
    if (mongoose.Types.ObjectId.isValid(id)) {
        throw new Error('ID inválido');
    }
};

const executeDatabaseCall = async (callback) => {
    try {
        return await callback();
    } catch (error) {
    console.error('Erro no repositorio', error);
    if (error instanceof mongoose.Error.ValidationError) {
        throw new Error(`Erro de validação: ${error.message}`);
    }
    if (error.message === 'ID inválido') {
        return null;
    }
    throw new Error('Erro ao processar a operação no banco de dados');
    }
};

class MemberRepository {

    async createMember(memberData) {
        return await executeDatabaseCall(async () => {
            const newMember = new Member(memberData);
            return await newMember.save();
        });
    };

    async getAllMembers() {
        return await executeDatabaseCall(async () => {
            return await Member.find();
        });
    };

    async getMemberById(id) {
        isValidObjectId(id);
        return await executeDatabaseCall(async () => {
            return await Member.findById(id);
        });
    };

    async updateMember(id, memberData) {
        isValidObjectId(id);
        return await executeDatabaseCall(async () => {
            return await Member.findByIdAndUpdate(id, memberData, { new: true });
        });
    };

    async deleteMember(id) {
        isValidObjectId(id);
        return await executeDatabaseCall(async () => {
            return await Member.findByIdAndDelete(id);
        });
    };
};

export default new MemberRepository();