const router = require("express").Router();
const auth = require("../controllers/authController");
const requireAuth = require("../middlewares/authMiddleware");

router.post("/register", auth.register);
router.post("/login", auth.login);
router.get("/profile",requireAuth,  auth.profile);

module.exports = router;
