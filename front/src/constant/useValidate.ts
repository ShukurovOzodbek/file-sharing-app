export default (data: any, schema: any) => {
    const errors: any = {
        isError: false
    };
    
    for (let key in data) {
        const userKey = data[key];
        const schemaKey = schema[key];
        if (userKey.length === 0) {
            errors.isError = true;
            errors[key] = schemaKey.default;
            return errors;
        }
        const isValid = schemaKey.pattern.test(userKey);
        
        if (!isValid) {
            errors.isError = true;
            errors[key] = schemaKey.message;
            return errors;
        }
    }
    
    return errors;
}