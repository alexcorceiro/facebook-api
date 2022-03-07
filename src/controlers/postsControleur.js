import { HttpException, HttpStatus } from '../erros/HttpException.error';
import * as postsModel from '../model/postsModel';

export const createPosts = async (req, res) => {
    const {message, author} = req.body
    const users = await postsModel.createOne({message, author})

    res
    .status(201)
    .json({data: {users} })
}

export const findOneposts = async (res, req) => {
    const id = req.params.id;
  
    res
    .status(200)
    .json({post: await postsModel.returnPostById(Number(id))})  
}



export const findAllposts = async (res, req) => {
    const id = req.params.id;
    res
    .status(200)
    .json({
        data: {
            post: await postsModel.findAll()
        }
    })
}

export const updateOneposts = async (req, res) => {
    const postsData = req.body;
    const {id} = req.params;
    const posts = await postsModel.updatePost({
        id: Number(id),
        message: postsData.message,
        updatedAt: new Date()
      })
    res
    .status(200)
    .json({posts})
}


export const deleteOne = async (req, res) => {
    console.log('supresion')
    const {id} = req.params;
    if(!Number.isInteger(+id)){
      response.json({error})
    }else{
     const result = await postsModel.DeleteOne(Number(id))

    res
    .status(204)
    .end()
}
}
