import Member from '../models/Member.js';
import mongoose from 'mongoose';

export class MemberRepository {

    async createMember(data) {
        try {
            const newMember = new Member(data);
            return await newMember.save();
        } catch (error) {
            if (error instanceof mongoose.Error.ValidationError) {
                throw new Error(`Erro de validação: ${error.message}`);
            }
            console.error("Erro ao criar membro", error)
            throw new Error('Erro ao criar membro');
        }
    }

    async getAllMembers() {
        try {
            return await Member.find();
        } catch (error) {
            console.error("Erro ao buscar membros", error)
            throw new Error('Erro ao buscar membros');
        }
    }

    async getMemberById(id) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return null;
            }
            return await Member.findById(id);
        } catch (error) {
            console.error("Erro ao buscar membro", error)
            throw new Error('Erro ao buscar membro');
        }
    }

    async updateMember(id, data) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return null;
            }
            return await Member.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            if (error instanceof mongoose.Error.ValidationError) {
                throw new Error(`Erro de validação: ${error.message}`);
            }
            console.error("Erro ao atualizar membro", error)
            throw new Error('Erro ao atualizar membro');
        }
    }

    async deleteMember(id) {
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return null;
            }
            return await Member.findByIdAndDelete(id);
        } catch (error) {
            console.error("Erro ao deletar membro", error)
            throw new Error('Erro ao deletar membro');
        }
    }
}