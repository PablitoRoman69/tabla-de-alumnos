const mongoose = require('mongoose');
const url_db= 'mongodb://localhost:27017/';   //mongoose.connect('la url de mongo db compass')

mongoose.connect (url_db)

.then(()=>{
    console.log('conexión exitosa bitch');
})
.catch((err)=>{
   console.log('no funciona bitch');
})

//Schema
const esquema_alumnos = new mongoose.Schema(
    {
        name: {
            type:String
        },
        apepat: {
            type:String
        },
        apemat: {
            type:String
        },
        telnumber: {
            type:Number
        },
        fechanac: {
            type:Date
        }
    }
)

const alumnos = new mongoose.model('Tabla de registro de alumnos', esquema_alumnos);

alumnos.create(
    {
        name: 'Honey',
        apepat: 'Lopez',
        apemat: 'Ornelas',
        telnumber: 4493456702,
        fechanac: new Date('2003, 02, 17')
    }
)

