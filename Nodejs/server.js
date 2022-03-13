var http = require('http');
var dt = require('./date');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
/*
//LEER ARCHIVO  HTML
http. createServer(function(req, res){
    fs.readFile('index.html',function(err,data){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);

//CREAR ARCHIVO
fs.appendFile('archivo.txt', 'hola este es el contenido', function(err){
    if(err)throw err;
    console.log('Gauardar');
});

//LEER ARCHIVO
fs.open('archivo.txt', 'w', function(err,file){
    if(err)throw err;
    console.log('Guardar');
});

//REMPLAZA EL ARCHIVO Y CONTENIDO DEL MISMO
fs.writeFile('NewArchvio.txt', 'de nuevo el archivo', function (err){
    if(err) throw err;
    console.log('Guardar de nuevo')
});

//ACTUALIZA ARCHIVO EXISTENTE
fs.appendFile('archivo.txt','actualizando el archivo', function(err)
{
    if(err) throw err;
    console.log('Actualizar');
});

//REMPLAZA LO ESCRITO ENE L ARCHVIO PASANDO LO QUE QUIERE CAMBIAR
fs.writeFile('NewArchivo.txt', 'archivo', function(err){
    if(err) throw err;
    console.log('Remplazado!');
});

//BORRAR ARCHIVOS
fs.unlink('NewArchvio.txt',function(err) {
    if(err) throw err;
    console.log('archivo eliminado');
});

//RENOMBRAR EL ARCHIVO
fs.rename('archivo.txt','archivo2.txt',function(err){
    if(err) throw err;
    console.log('archivo renombrado');
});

*/
http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write('File uploaded and moved!');
          res.end();
        });
   });
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
  }).listen(8080);
/*
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var q = url.parse(req.url, true).query;
    var text = q.year + " "+ q.month;
    //res.write(req.url);
    res.end(text);
}).listen(8080);*/