
const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser')
const upload = require('../midelwares/uploadImg');
const proController = require('../controllers/productControllrt.js')
const signupController = require("../controllers/signupController.js");
const signinController = require("../controllers/signinController.js");


router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

app.use(express.json());

router.post('/register', signupController.signupController)
router.post('/signin', signinController.signinController)

router.get('/signup', signupController.register);
router.get('/login', signinController.login);


router.get('/', proController.defultController);
router.post('/elecronicPoductForm', upload.single('productImg'), proController.addProductController);
router.get('/views', proController.viewController);
router.get("/deleteproduct/:id", proController.deleteController);
router.get("/editproduct/:id",proController.editController);


module.exports = router;