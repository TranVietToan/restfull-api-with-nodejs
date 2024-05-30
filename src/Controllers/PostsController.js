const posts = require("../Models/Posts");

let getAllPosts = async (req, res)=>{
    let dataPosts = await posts.getAllPosts() 
    return res.status(200).json({
        message: "oke",
        data: dataPosts
    });
}

let createNewPosts = async (req, res)=>{
    let {title, des, author } = req.body;
    if(!title || !des || !author){
        return res.status(200).json({
            message: "Thiếu dữ liệu",
        })
    }
    try {
        let result = await posts.createNewPosts(title, des, author);
        if(!(result instanceof Error)){
            return res.status(200).json({
                message: "Thêm dữ liệu thành công"
            });
        }else{
            return res.status(400).json({
                message: "Xuất hiện lỗi tại server"
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    } 
}

let updatePosts = async (req, res)=>{
    let {title, des, author, id } = req.body;
    if(!id || !title || !des || !author){
        return res.status(400).json({
            message: "Thiếu dữ liệu",
        })
    }
    try {
        let result = await posts.updatePosts(title, des, author, id);
        if(!(result instanceof Error)){
            return res.status(200).json({
                message: "Cập nhật dữ liệu thành công"
            });
        }else{
            return res.status(400).json({
                message: "Xuất hiện lỗi tại server"
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    } 
}

let deletePosts = async (req, res)=>{
    let id = req.params.id;
    if(!id){
        return res.status(400).json({
            message: "Thiếu dữ liệu",
        })
    }
    try {
        let result = await posts.deletePosts(id);
        if(!(result instanceof Error)){
            return res.status(200).json({
                message: "Xóa dữ liệu thành công"
            });
        }else{
            return res.status(400).json({
                message: "Xuất hiện lỗi tại server"
            });
        }
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    } 
}
module.exports = {getAllPosts, createNewPosts, updatePosts, deletePosts}