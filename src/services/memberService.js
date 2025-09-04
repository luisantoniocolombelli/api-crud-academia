import memberRepository from '../repositories/memberRepository.js';
import { createMemberSchema, updateMemberSchema } from 'zod';

class MemberService {
    constructor() {
        this.memberRepository = memberRepository;
    }

    async createMember(data) {
        const validatedData = createMemberSchema.parse(data);
        return this.memberRepository.createMember(validatedData);
    }

    async getAllMembers() {
        return this.memberRepository.getAllMembers();
    }

    async getMemberById(id) {
        return this.memberRepository.getMemberById(id);
    }

    async updateMember(id, data) {
        const validatedData = updateMemberSchema.parse(data);
        return this.memberRepository.updateMember(id, validatedData);
    }

    async deleteMember(id) {
        return this.memberRepository.deleteMember(id);
    }
}

export default new MemberService();