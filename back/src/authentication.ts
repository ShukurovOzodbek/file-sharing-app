import {Router} from "express";
import {InvalidEmail, InvalidPassword} from "./errors";
import Users from "./models/users.model";
import bcrypt from "bcrypt";
import createToken from "./utils/createToken";
import removeKey from "./utils/removeKey";

const router = Router();

router.post('/', async (req, res) => {
    const {body} = req;
    
    if (!body.email) {
        return res.status(400).json(InvalidEmail());
    }
    
    if (!body.password || body.password.length < 8) {
        return res.status(400).json(InvalidPassword(body.password));
    }
    
    let user = await Users.findOne({email: body.email});
    
    const isValidPass = bcrypt.compareSync(body.password, user.password);
    
    if (!isValidPass) {
        return res.status(400).json(InvalidPassword(body.password));
    }
    
    const token = createToken(user);
    
    user = removeKey('password', user);
    
    res.json({user: user, accessToken: token});
});

export default router;