import express from 'express';
import multer from 'multer';



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })
const app = express();
app.use(express.json())
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("todo bien")
})

app.post('/files', upload.single('avatar'), (req, res) => {
    console.log(req.file)
    res.status(201).send("El archivo ha sido subiddo correctamente")
})


app.listen(PORT, () => {
    console.log(`conectado a la url http://localhost:${PORT}`)
})