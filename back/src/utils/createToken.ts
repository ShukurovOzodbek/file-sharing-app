import jwt from 'jsonwebtoken';

export default (data: any) => {
    const HASH_KEY: any = process.env.HASH_KEY;

    const passData = {
        userId: data._id
    }

    return jwt.sign(passData, HASH_KEY);
}