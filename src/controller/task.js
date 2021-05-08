const {Task} = require ("../model");

exports.getTask = async () =>{
    const listTask = await Task.findAll();
    return[];
}

exports.createTask = async (body) => {
    const newTask = await Task.create({ ...body });
    return newTask
}

exports.updateTask = async(body) =>{
    try {
        const{id,content,status} = body;
        const task = await Task.findByPk(id);
        task.content = content;
        task.status = status;

        await task.save();
        return task
    } catch (error) {}
}

exports.deleteTask = async (taskId) =>{
    try {
        const result = await Task.destroy({where: {id : taskId}});
        return result;
    } catch (error) {}
}