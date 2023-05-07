import {Sequelize,DataTypes} from 'sequelize'

 const db = new Sequelize('pelis','root','',{
host:'localhost',
dialect:'mysql',
})


export default db 