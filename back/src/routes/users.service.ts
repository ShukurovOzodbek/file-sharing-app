import {Router} from "express";
import Users from "../models/users.model";
import hashPassword from "../utils/hashPassword";
import {InvalidPassword} from "../errors";
import createToken from "../utils/createToken";
import removeKey from "../utils/removeKey";

const router = Router();

router.post('/', async (req, res) => {
    const {body} = req;
    
    if (!body.password || body.password.length < 8) {
        res.status(400).json(InvalidPassword(body.password));
    }
    
    if (!body.email) {
        res.status(400).json('Не валидная почта');
    }
    
    body.password = await hashPassword(body.password);
    
    let user = await Users.create(body);
    const token = createToken(body);
    
    user = removeKey('password', user);
    
    res.json({user: user, accessToken: token});
});

export default router;