import express from 'express';
import { register, login } from '../controllers/authController.js';
import bodyParser from 'body-parser'

const router = express.Router();
router.use(bodyParser.json())



const ENVIRONMENT = process.env.NODE_ENV || 'development';
if (ENVIRONMENT === 'development') {
  console.log('Developer mode');
  router.use((req, res, next) => {
    let horaEjecucion = new Date().toLocaleString(); // Mover la declaración aquí
    console.log('-----------------------------------------------------------------------');
    console.log(`DEV => Tipo: ${req.method} Ruta: ${req.url} IP: ${req.ip} Hora: ${horaEjecucion}`);
    console.log('Parameters:',req.body);
    console.log('-----------------------------------------------------------------------');
    next();
  });

  router.use((req, res, next) => {
    const originalJson = res.json;
    res.json = function (body) {
        console.log('Respuesta enviada:', body);
        return originalJson.call(this, body);
    };
    next();
});
}



router.get('/',(req,res)=> {
  res.json('Hola mundo')
})


router.post('/register', register);
router.post('/login', login);




router.use((req, res, next) => {
  res.status(404).json({ "rspta": "Ruta no encontrada" });
});
router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ "rspta": "Error interno" });
});


export default router;