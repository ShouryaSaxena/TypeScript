import express, {Router} from "express";
const router = express.Router();
import { add_Student, displayForm, get_result } from "../controllers/studentDataControl";



router.get('/student', displayForm);
router.post('/create', add_Student);
router.get("/getresult",get_result);
export {
    router
}