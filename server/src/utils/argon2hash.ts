import argon2 from "argon2";

export const hashPasswordArgon2 = async (password: string): Promise<string> => {
  return await argon2.hash(password);
}

export const verifyPasswordArgon2 = async (hash: string, password: string): Promise<boolean> => {
  return await argon2.verify(hash, password);
}
