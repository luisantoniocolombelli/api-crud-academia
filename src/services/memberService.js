import memberRepository from '../repositories/memberRepository.js';

export default {
    createMember: memberRepository.createMember,
    getAllMembers: memberRepository.getAllMembers,
    getMemberById: memberRepository.getMemberById,
    updateMember: memberRepository.updateMember,
    deleteMember: memberRepository.deleteMember,
};