const {Op} = require('sequelize');
const { User } = require("../model");


exports.getUser = async (limit = 1, page =1, key ="") => {
   try {
    const listUser = await User.findAll({
        where: {
            name: {[Op.substring]: key},
        }
        },
        {
            limit: Number(limit),
            offset: Number((page - 1) * limit)
        });
    console.log(listUser);
    return listUser;
   } catch (error) {}
}

exports.createUser = async (body) => {
    const newUser = await User.create({ ...body });
    return newUser
}

exports.updateUser = async(body) =>{
    try {
        const{id,name,age,address} = body;
        const user = await User.findByPk(id);
        user.name = name;
        user.age = age;
        user.address = address;

        await user.save();
        return user
    } catch (error) {}
}

exports.deleteUser = async (userId) =>{
    try {
        const result = await User.destroy({where: {id : userId}});
        return result;
    } catch (error) {}
}