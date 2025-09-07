import express from "express";
import memberController from "../controllers/memberController.js";

const router = express.Router();

router.get("/:id", memberController.getMemberById);
router.patch("/:id", memberController.updateMember);
router.delete("/:id", memberController.deleteMember);
router.post("/", memberController.createMember);
router.get("/", memberController.getAllMembers);

export default router;
