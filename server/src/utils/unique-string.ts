import { randomInt } from 'crypto'

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz0123456789';

export const uniqueString = async (prefix: string, length = 8): Promise<string> => {
    const TOTAL_LEN = length
    const SUFFIX_LEN = TOTAL_LEN - prefix.length

    let suffix = ''
    for (let i = 0; i < SUFFIX_LEN; i++) {
        const index = randomInt(0, ALPHABET.length)
        suffix += ALPHABET[index]
    }
    return prefix + suffix
}