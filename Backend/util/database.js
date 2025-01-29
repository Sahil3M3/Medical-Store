const Sequelize=require("Sequelize");

const sequelize=new Sequelize("medicalstore","root","manager",{dialect:"mysql"});

module.exports=sequelize;