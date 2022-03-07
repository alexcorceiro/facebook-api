import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = async ({ email, password }) =>
    prisma.users.create({
        data: {
            email,
            password,
            profile: {
                create: {
                    firstName,
                    lastName
                },
            },
        },
    });


export const findAll = () => prisma.users.findMany();



export const findOneByid = (id) => 
prisma.users.findUnique({
    where: {id}
    
})


export const updateUsers = (id, { email, password }) => 
prisma.users.update({
    where: {id},
    data: {email, password }
});



export const deleteOne = (id) => 
prisma.users.delete({
    where: { id }
});