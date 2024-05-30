const pool =  require("../Configs/ConnectDataBase")

let getAllPosts = async()=>{
    let sql =  `SELECT * from posts`;
    const [rows, fields] = await pool.execute(sql);
    return rows;
}

let createNewPosts = async(title, des, author)=>{
    let sql = `INSERT INTO posts(title, des, author) values (?, ?, ?)`;
    try {
        await pool.execute(sql, [title, des, author])
    } catch (error) {
        console.log(error);
        return error;
    }
}

let updatePosts = async(title, des, author, id) => {
    let sql = `UPDATE posts SET
            title = ?, 
            des = ?, 
            author = ? 
            WHERE id = ?`; 
    try {
        await pool.execute(sql, [title, des, author, id]);
    } catch (error) {
        console.log(error);
        return error
    }
}

let deletePosts = async(id)=>{
    let sql = `DELETE FROM posts WHERE id=?`;
    try {
        await pool.execute(sql,[id]);
    } catch (error) {
        console.log(error);
        return error
    }
}
module.exports = { getAllPosts, createNewPosts, updatePosts, deletePosts}
