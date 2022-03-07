import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = async ({ message, author }) =>
    prisma.posts.create({
        data: {
            message,
            Author: { connect: { id: author } }
        },
    });


export const findAll = async(id) =>
 prisma.posts.findMany({
     where:{ authorid: id}
 });

export const findOneByid = (id) =>
    prisma.posts.findUnique({
        where: { id },
    })


export const updateOnepost = (id, { message, updateAt }) =>
    prisma.posts.update({
        where: { id },
        data: { message, updateAt },
    });

export const deleteOnepost = (id) =>
    prisma.posts.delete({
        where: { id },
    });