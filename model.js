
import {DataTypes} from 'sequelize'


const movie = db.define('movies',{
    id:
    {
        type:DataTypes.INTEGER,
        primaryKey:true
    },

    titulo:
    {
        type:DataTypes.STRING,
        allowNull:false
    },

    descripcion:
    {
        type:DataTypes.STRING,
        allowNull:false
    }, 

    fecha:
    {
        type:DataTypes.STRING,
        allowNull:false
    },

    imagen:
    {
        type:DataTypes.STRING,
        allowNull:false
    },
},{tableName:'movies'})


export default movie