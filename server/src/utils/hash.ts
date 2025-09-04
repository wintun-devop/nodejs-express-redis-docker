import bcrypt from 'bcrypt';

// make hashing
export const bcryptHash = async (input: string) => {
    return bcrypt.hash(input, 10).then( (hash: string)=> {
      return hash;
    });
}

// checking hash
export const  bcryptCheck = async (unHashInput: string | Buffer, hashInput: string )=>{
    return bcrypt.compare(unHashInput, hashInput).then( (result: Boolean)=> {
        return result;
    });
}