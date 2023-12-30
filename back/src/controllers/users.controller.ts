import {InvalidEmail, InvalidPassword} from "../errors";
import hashPassword from "../utils/hashPassword";
import Users from "../models/users.model";
import createToken from "../utils/createToken";
import removeKey from "../utils/removeKey";

export const createUser = async (req: any, res: any) => {
    const {body} = req;
    
    if (!body.password || body.password.length < 8) {
        res.status(400).json(InvalidPassword(body.password));
    }
    
    if (!body.email) {
        res.status(400).json(InvalidEmail());
    }
    
    body.password = await hashPassword(body.password);
    
    let user = await Users.create(body);
    const token = createToken(body);
    
    user = removeKey('password', user);
    
    res.json({user: user, accessToken: token});
}