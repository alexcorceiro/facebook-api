import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


export const findOneById = (userId) =>
    prisma.profile.findUnique({
        where: { userId: userId},
    });


export const deleteOne = (userId) =>
    prisma.profile.delete({
        where: { userId: userId },
    });

export const updateOne = async({firstName,lastName,userId}) => {
    return prisma.profile.update({
           where:{ userId: userId },
           update:{ firstName: firstName, lastName: lastName},
           create:{
              firstName,
              lastName,
              User:{ 
                 connect: {id: userId},
              }
           }
        })
     
     }
