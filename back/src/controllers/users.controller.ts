import {InvalidEmail, InvalidPassword} from "../errors";
import hashPassword from "../utils/hashPassword";
import Users from "../models/users.model";
import createToken from "../utils/createToken";
import removeKey from "../utils/removeKey";
import jwt from "jsonwebtoken";

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

export const updateUser = async (req: any, res: any) => {
    const {body, headers} = req;
    
    if (!headers?.authorization) {
        return res.status(401).json({message: 'Пользователь не найден.'});
    }
    
    const decoded: any = jwt.decode(headers?.authorization);
    
    try {
        await Users.updateOne({_id: decoded.userId}, body);
    } catch (e) {
        return res.status(400).json({message: 'Что-то пошло не так.'});
    }
    
    res.json({message: 'Пользователь успешно обновлен'});
}

export const getUser = async (req: any, res: any) => {
    const {params} = req;
    
    let user = {};
    
    try {
        await Users.findOne({_id: params.id});
    } catch (e) {
        res.status(400).json({message: 'Что-то пошло не так.'});
    }
    
    user = removeKey('password', user);
    
    res.json({user: user});
}
