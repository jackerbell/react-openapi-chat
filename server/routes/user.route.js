import express from "express";
import { body } from "express-validator";
import { userRegister, userSignIn } from "../controllers/user.controller.js";
import { tokenAuth } from "../middlewares/token.middleware.js"
import { validate } from "../utils/validator.js"

const router = express.Router();

router.post(
  "/signup",
  body("username")
    .exists().withMessage("사용자명을 작성해주세요!")
    .isLength({ min: 6 }).withMessage("사용자명은 최소 6자 이상 입력해주세요!")
    .isLength({ max: 15 }).withMessage("사용자명은 최대 15자까지 입니다!"),
  body("password")
    .exists().withMessage("패스워드를 작성해주세요!")
    .isLength({ min: 8 }).withMessage("패스워드는 최소 8자 이상 입력해주세요!"),
  validate,
  userRegister
);

router.post(
  "/signin",
  body("username")
    .exists().withMessage("사용자명을 작성해주세요!")
    .isLength({ min: 6 }).withMessage("사용자명은 최소 6자 이상 입력해주세요!"),
  body("password")
    .exists().withMessage("패스워드를 작성해주세요!")
    .isLength({ min: 8 }).withMessage("패스워드는 최소 8자 이상 입력해주세요!"),
  validate,
  userSignIn
);

router.get(
  "/check-token",
  tokenAuth,
  (req,res) => res.status(200).json({
    username: req.user.username
  })
);

export default router;