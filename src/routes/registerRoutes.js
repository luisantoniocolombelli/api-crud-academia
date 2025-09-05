import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bem-vindo à API de Membros!',
        version: '1.0.0',
        routes: {
            'GET /members/:id': 'Busca um membro por ID.',
            'PATCH /members/:id': 'Atualiza um membro por ID.',
            'DELETE /members/:id': 'Deleta um membro por ID.',
            'GET /members': 'Lista todos os membros.',
            'POST /members': 'Cria um novo membro.'
        }
    });
});

router.get('/:id', memberController.getMemberById);
router.patch('/:id', memberController.updateMember);
router.delete('/:id', memberController.deleteMember);
router.post('/', memberController.createMember);
router.get('/', memberController.getAllMembers);

export default router;