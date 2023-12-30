export default (key: string, object: any) => {
    const res: any = {};
    const data = {...object._doc}

    for (let i in data) {
        if (i !== key) {
            res[i] = object[i]
        }
    }
    
    return res;
}