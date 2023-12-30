export const InvalidPassword = (pass: string) => {
    const message = {
        message: 'Не валидный пароль',
        reason: 3
    }
    
    if (pass.length < 8) {
        message.reason = 5;
    }
    
    return message;
}

export const InvalidEmail = () => {
    return {
        message: 'Не валидная почта',
        reason: 3
    };
}