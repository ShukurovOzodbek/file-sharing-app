import bcrypt from 'bcrypt';

export default async (pass: string) => {
    const saltRounds = 10;
    
    const salt = await bcrypt.genSalt(saltRounds);
    
    return await bcrypt.hash(pass, salt);
}
