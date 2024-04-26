var path = require('path');

var express = require('express');
var app = express();
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

__dirname = path.resolve();


const uri = process.env.URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


const infoSchema = new mongoose.Schema({
  name: String,
  language: String,
  code: String,
  timestamp: { type: Date, default: Date.now }
});

const Info = mongoose.model('Info', infoSchema);

app.use(bodyParser.urlencoded({ extended: false, }))
app.use(bodyParser.json())


app.get('/api', (req, res) => {
  res.json({ greeting: 'hello api' })
});




  app.post('/api/user', async (req, res) => {
    try {
      const formData = new Info({
        name: req.body.name,
        language: req.body.lang,
        code: req.body.code.substring(0, 100),
        
      });

      await formData.save();
      const allFormData = await Info.find();
      const tableData = allFormData.map(({ name, language, code, timestamp }) => ({
        name,
        language,
        code,
        timestamp: timestamp.toLocaleString(),
        
      }));
      
      res.json(tableData);
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Error saving form data', message: error.message });
    }
  });


app.use(express.static(path.join(__dirname,"/frontend/dist")));


app.get("*",(req,res)=>{
  path.join(__dirname,"frontend","dist","index.html");
})

app.listen(5173, () => {
  console.log("server started")
})






