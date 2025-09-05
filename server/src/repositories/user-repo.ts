import { prisma } from "../utils/prismaSingletone";


export namespace UserRepo {
    // create
    export const create = async (user: any) => {
        return await prisma.$primary().esmUsers.create({
            data: {
                ...user,
            },
        });
    }
    // update
    export const update = async (id: string, user: any) => {
        // console.log(id, product);
        return await prisma.$primary().esmUsers.update({
            where: {
                id,
            },
            data: {
                ...user,
            },
        });
    };
    // delete
    export const remove = async (id: string) => {
        return await prisma.$primary().esmUsers.delete({
            where: {
                id: id,
            },
        });
    };

    // get a single row by unique id
    export const selectById = async (id: string) => {
        return await prisma.$replica().esmUsers.findFirst({
            where: {
                id: id,
            },
        });
    };
    export const selectByEmail = async (email: string) => {
        return await prisma.$replica().esmUsers.findFirst({
            where: {
                email: email,
            },
        });
    };
    export const selectUsername = async (username: string) => {
        return await prisma.$replica().esmUser.findFirst({
            where: {
                username: username,
            },
        });
    };

    // get a single row by email
    export const selectByUniqueItems = async (email: string, username: string) => {
        return await prisma.$replica().esmUsers.findMany({
            where: {
                OR: [
                    { email: email },
                    { username: username }
                ]
            }
        });
    };
    // find all
    export const findMany = async () => {
       return await prisma.$replica().esmUsers.findMany({})
    };
}