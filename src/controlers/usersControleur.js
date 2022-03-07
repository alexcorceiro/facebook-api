import { HttpException, HttpStatus } from '../erros/HttpException.error';
import * as usersModel from '../model/usersModel';
import * as profilesModels from '../model/profilsModel';

export const createOne = async (req, res) => {
    await usersModel.createOne(req.body)
    res
    .status(201)
    .json({data: profile })
}

export const findOne = async ({params: {id}}, res) => {
    const profile = await usersModel.findOneByid(Number(id))
    if(!profile){
        throw new HttpException('profile not found', HttpStatus.NOT_FOUND)    
}

    res
    .status(200)
    .json({data: { profile } })
}

export const findOneUsers = async (res, req) => {
    res
    .status(200)
    .json({
        data: {
            profile: await usersModel.findAll()
        }
    })
}


export const deleteOne = async ({params: {id}}, res) => {
    await usersModel.deleteOne(Number(id))

    res
    .status(204)
    .end()
}

export const updateUsers = async (req,res) => {
    console.log("mise a jour du  profile !")
    const profileData = req.body;
    const {id} = req.params;
    const profile = await profilesModels.updateProfiles({
        firstName: profileData.firstName ,
        lastName: profileData.lastName,
        userId: id
    });
    res
    .status(201)
    .json(profile);
  }