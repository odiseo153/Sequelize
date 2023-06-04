
import express  from "express";
import db from "./db.js";
import movie from "./model.js";
const app = express();     





async function conectar()
{
   try 
    {
        console.log()
        await db.authenticate();
        console.log('la base de datos esta corriendo')

    }catch(e) 
    {
        throw new Error(e)
    }  

}

conectar() 
 


    app.get('/selectAll',async (req,res)=>
    {    
        try
        { 
        const user = await movie.findAll()
        res.send(user.dataValues) 
        
        }catch(e)
        {
        res.send(e.message) 
        }    
    })

   app.get('/selectId/:id',async (req,res)=>
    {    
        try
        { 
        const user = await movie.findByPk(req.params.id)
        res.send(user.dataValues) 
        
        }catch(e)
        {
        res.send(e) 
        }    
    })
 

    app.post('/insert',async(req,res)=>
    {
        const pelis = 
        {
        id:req.params.id,
        titulo:req.params.titulo,
        descripcion:req.params.descripcion,
        fecha:req.params.fecha,
        imagen:req.params.imagen
        }

    const existe = await movie.findOne({
            where:
            {
            id:pelis.id,
            }
        })

    const existe1 = await movie.findOne({
            where:
            {
            titulo:pelis.titulo,
            }
        })

    if(existe && existe1)
        {
        console.log('ese titulo o id ya existe')
        return null;
        }


        try
        {
        const usuario = new movie(pelis);
        await usuario.save();
        res.send({UsuarioInsertado:usuario})
        }catch(e)
        {
        res.send(e);
        }
    })
  
app.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, fecha,imagen } = req.body;

  try {
    // Busca el usuario por su ID
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).send('Usuario no encontrado');
    }

    // Actualiza el usuario con los nuevos datos
    await user.update({ titulo, descripcion, fecha,imagen });

    // Envía una respuesta con el usuario actualizado
    res.send(user);
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).send('Error al actualizar el usuario');
  }
}); 

    app.delete('/delete/:id', async(req,res)=>
    {

    try {
        const peli =await movie.findOne({
            where:{id:req.params.id}
            })

            await movie.destroy({
            where: {id:req.params.id} // Borra el registro de la tabla donde id sea igual a 5
        // También resetea el contador de ID auto-incrementable en caso
        //de que queramos borrar todos los registros
            });

            res.send({PeliculaEliminada:peli})
        } catch (error) {
            console.error('Error al eliminar la tabla:', error);
        }
    })




app.listen(3100,()=>
{
console.log('El server esta corriendo en el Puerto 3100')
})














