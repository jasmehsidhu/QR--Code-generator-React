import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import parser from 'qr-image'
import fs from'fs'

const PORT=1000;
const app=express()
const dir=dirname(fileURLToPath(import.meta.url))

app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log('Server Started');
});
app.post('/img',(req,res)=>{
var qr=parser.image(req.body.url,{type:'png'})
var dest=fs.createWriteStream('qr-image.png')
qr.pipe(dest)
dest.on('finish',()=>{
    res.sendFile(path.join(dir,'qr-image.png'))
})
})