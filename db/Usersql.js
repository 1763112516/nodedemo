var UserSQL={
    insert: 'INSERT INTO User(userName,userPassword) VALUES(?,?)', // 插入数据
    drop: 'DROP TABLE User', // 删除表中所有的数据
    queryAll: 'SELECT * FROM User', // 查找表中所有数据
    getUserById: 'SELECT * FROM User WHERE userName =?', // 查找符合条件的数据

};
module.exports=UserSQL;