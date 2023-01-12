const express = require('express');
const app = express();
const mysql = require('mysql2');

// motor de plantilla
const hbs = require('hbs');

//Encontrar archivos
const path = require('path');

//Para mandar mail
const nodemailer = require('nodemailer');

//Variables de entorno
require('dotenv').config();

//Configuramos el puerto
const PORT = process.env.PORT || 9000; //trae la configuracion de .env
//console.log(PORT);
console.log(process.env.EMAIL);
console.log("Puerto de uso " + process.env.PORT);
console.log("Puerto de Base de datos  " + process.env.DBPORT);



//Middelware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));  //busca archivos de html, css ,etc


//Configuramos el motor de plantillas de HBS
app.set('view engine', 'hbs'); // utilizamos para la ingeniria de plantillas  handlebars
// Configuramos la ubicacion de las plantillas
app.set('views', path.join(__dirname, 'views')); //las vistas se van a encontrar en el directorio principal en la carpeta vistas
//Configuramos los parciales de los motores de plantillas
hbs.registerPartials(path.join(__dirname, 'views/partials'));  //Busca los parciales dentro de vistas y se llama parcial (path busca los archivos). 


//Conexión a la Base de Datos
/*const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT
})

conexion.connect((err)=>{
    if(err) throw err;
    console.log(`Conectado a la Database ${process.env.DATABASE}`);
})*/




//Rutas de la aplicacion
app.get('/', (req, res)=>{
    res.render('index',{
        titulo: 'Platos Rapidos',
       

    })
})

app.get('/inicio', (req, res)=>{
    res.render('index',{
        titulo: 'Platos Rapidos',
       

    })

})
app.get('/Home', (req, res)=>{
    res.render('index')
        
    })

app.get('/productos', (req, res)=>{
    res.render('productos',{
        titulo: 'Platos Rapidos',
      
    })
})

app.get('/nosotros', (req, res)=>{
    res.render('nosotros')
        
    })
app.get('/iniciarsecion', (req, res)=>{
    res.render('iniciarsecion')
       
    })

//Login de configuracion
app.post('/iniciarsecion', (req,res)=>{
    //console.log(req);


    const user = req.body.user;
    const password = req.body.password;

    if(user === "Dante" && password === "1111"){

        res.render('formulario');

    }else{
        res.render('error');
    }

})


// ingresar datos a formulario
app.post('/formulario', (req,res)=>{
    
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const posicion = req.body.posicion;
    const precio = req.body.precio;
    
    /* Se cargan todos las variables datos del formulario despues se agregan a la base de datos de abajo*/
    
    let datos= {
        nombre: nombre,/*primer nombre viene de la base de datos el segundo de variable que creamos en el formulario frondend */
        descripcion: descripcion,
        posicion: posicion,
        precio: precio
    }
    
   /* let sql = "INSERT INTO productos set ?";
    
    conexion.query(sql, datos, function(err){
        if (err) throw err;
            console.log('1 registro insertado');      
           
            res.render('enviado')  
    })*/
    res.render('sinDatos')
})

app.get('/tabladepedidos', (req, res)=>{
   
   /* let sql = "SELECT * FROM pedido ";   // Se coloca cualquier consulta igual que con workbench
    conexion.query(sql, function(err, result){
        if (err) throw err;
            
            res.render('tabladepedidos',{
                
                datos: result           
    })   


 
    

})*/
      res.render('sinDatos')
    })
app.get('/pedidouno', (req, res)=>{
   /* let sql = "SELECT * FROM productos where posicion = 1";   // Se coloca cualquier consulta igual que con workbench
        conexion.query(sql, function(err, result){
            if (err) throw err;
                
                res.render('productos',{
                    titulo: 'Productos',
                    datos: result            
        })   
    })*/
    res.render('sinDatos')
})

app.get('/pedidodos', (req, res)=>{
    /*let sql = "SELECT * FROM productos where posicion = 2";   // Se coloca cualquier consulta igual que con workbench
        conexion.query(sql, function(err, result){
            if (err) throw err;
                
                res.render('productos',{
                    titulo: 'Productos',
                    datos: result           
        })   
    })*/
    res.render('sinDatos')
})

app.get('/pedidotres', (req, res)=>{
    /*let sql = "SELECT * FROM productos where posicion = 3";   // Se coloca cualquier consulta igual que con workbench
        conexion.query(sql, function(err, result){
            if (err) throw err;
                
                res.render('productos',{
                    titulo: 'Productos',
                    datos: result          
        })   
    })*/
    res.render('sinDatos')
})

app.get('/pedidocuatro', (req, res)=>{
    /*let sql = "SELECT * FROM productos where posicion = 4";   // Se coloca cualquier consulta igual que con workbench
        conexion.query(sql, function(err, result){
            if (err) throw err;
                
                res.render('productos',{
                    titulo: 'Productos',
                    datos: result          
        })   
    })*/
    res.render('sinDatos')
})
app.get('/pedidocinco', (req, res)=>{
   /* let sql = "SELECT * FROM productos where posicion = 5";   // Se coloca cualquier consulta igual que con workbench
        conexion.query(sql, function(err, result){
            if (err) throw err;
                
                res.render('productos',{
                    titulo: 'Productos',
                    datos: result          
        })   
    })*/
    res.render('sinDatos')
})
app.get('/pedidoseis', (req, res)=>{
    /*let sql = "SELECT * FROM productos where posicion = 6";   // Se coloca cualquier consulta igual que con workbench
        conexion.query(sql, function(err, result){
            if (err) throw err;
                
                res.render('productos',{
                    titulo: 'Productos',
                    datos: result           
        })   
    })*/
    res.render('sinDatos')
})

app.get('/pedidosiete', (req, res)=>{
   /* let sql = "SELECT * FROM productos where posicion = 7";   // Se coloca cualquier consulta igual que con workbench
        conexion.query(sql, function(err, result){
            if (err) throw err;
                
                res.render('productos',{
                    titulo: 'Productos',
                    datos: result            
        })   
    })*/
    res.render('sinDatos')
})
app.get('/pedidoocho', (req, res)=>{
    /*let sql = "SELECT * FROM productos where posicion = 8";   // Se coloca cualquier consulta igual que con workbench
        conexion.query(sql, function(err, result){
            if (err) throw err;
                res.render('productos',{
                    titulo: 'Productos',
                    datos: result            
        })   
    })*/
    res.render('sinDatos')
})
app.get('/pedidonueve', (req, res)=>{
   /* let sql = "SELECT * FROM productos where posicion = 9";   // Se coloca cualquier consulta igual que con workbench
        conexion.query(sql, function(err, result){
            if (err) throw err;
               
                res.render('productos',{
                    titulo: 'Productos',
                    datos: result           
        })   
    })*/
    res.render('sinDatos')
})

app.get('/pedidolisto', (req, res)=>{
    res.render('pedidolisto',{
        titulo: 'Platos Rapidos',
    })
   
})

app.post('/pedidolisto', (req,res)=>{
    
   
    const posicion = req.body.posicion;
    const direccion = req.body.direccion;
    
    /* Se cargan todos las variables datos del formulario despues se agregan a la base de datos de abajo*/
    
    let datos= {
       
        posicion: posicion,
        direccion: direccion
    }
    
   /* let sql = "INSERT INTO pedido set ?";
    
    conexion.query(sql, datos, function(err){
        if (err) throw err;
            console.log('1 registro insertado');      
            
            res.render('enviado') 
    })*/
    
})




      app.get('/tabladeproductos', (req, res)=>{
       /* let sql = "SELECT * FROM productos";   // Se coloca cualquier consulta igual que con workbench
            conexion.query(sql, function(err, result){
                if (err) throw err;
                   
                    res.render('tabladeproductos',{
                        titulo: 'Productos',
                        datos: result           
            })   
        })*/
        res.render('sinDatos')
    })
      

    

/* creamos la ruta para los botones de delete y Update */

app.post('/delete', (req, res) => {
   // console.log(req.body.idProducto);
    res.send('Dato eliminado');
    
    
   /* let sql = "delete from productos where idProducto = " + req.body.idProducto ; 
    //console.log(sql);
    conexion.query(sql,  function(err, result){
        if (err) throw err;
        console.log('Dato eliminado: ' + result.affectedRows);
        res.render('tabladeproductos')
    })*/
    res.json({
        prueba:'Probando deploy sin Database'
    })
})




app.post('/update', (req, res) =>{
    
    const idProducto = req.body.idProducto;
    const posicion = req.body.posicion;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
/*
    let sql = "UPDATE productos SET nombre = '" 
    + nombre
    + "',precio =  '"
    + precio
    + "', posicion = '"
    + posicion
    + "', descripcion = '"
    + descripcion
    + "' WHERE idProducto= "
    + idProducto ;

          
        console.log(sql);
        //res.send(sql);
        conexion.query(sql,  function(err, result){
            if (err) throw err;
            console.log('Dato Actualizado: ' + result.affectedRows);
           res.render('iniciarsecion')
        })*/
        res.json({
            prueba:'Probando deploy sin Database'
        })
})



    app.get('/nosotros', (req, res)=>{
        res.render('nosotros',{
            titulo: 'Platos Rapidos',
           
    
    
        })
    })


    

app.get('/contacto', (req, res)=>{
    res.render('contacto',{
        titulo: 'Platos Rapidos',
       


    })
})
app.post('/contacto', (req, res) =>{
    const nombre = req.body.nombre;
    const email = req.body.email;
 
    
    
//creamos una funcion para enviar email al cliente. la sacamos de la pagina nodemailer
    
async function envioMail(){
    //Configuramos la cuenta del envío
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,  // puerto de gmail
        secure: true,
        auth: {                //autorizacion
            user: process.env.EMAIL,
            pass: process.env.EMAILPASSWORD
        }
    });

    //Envío del mail
    let info = await transporter.sendMail({
        from: process.env.EMAIL,//nuestro email
        to: `${email}`, //a quuien le mandamos el email
        subject: "Gracias por suscribirte a nuestra App",
        html:`Muchas gracias por visitar nuestra página <br>
        Recibirás nuestras promociones a esta dirección de correo. <br>
        Buen fin de semana!!`
    })
}




    let datos= {
        nombre: nombre,/*primer nombre viene de la base de datos el segundo de variable que creamos en el formulario frondend */
        email: email
        
    }
    //Insertamos los datos a la base de datos
   /* let sql = "INSERT INTO contactos set ?";// Tabla donde queremos que se cargue

conexion.query(sql, datos, function(err){
    if (err) throw err;
        console.log('1 registro insertado');      
        //EMAIL
        envioMail().catch(console.error);// envio correo si insetaron bien los datos
        res.render('enviado')
    })*/
    

    res.json({
        prueba: 'Sin conexion a Database'
    })


})




app.listen(PORT, ()=>{
    console.log(`Servidor trabajando en el puerto: ${PORT}`)
})




















