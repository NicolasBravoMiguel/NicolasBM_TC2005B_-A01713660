console.log("Hola desde node");

const filesystem = require("fs");

filesystem.writeFileSync('hola.txt', 'Hola desde node');

setTimeout(() => {
    console.log("JOJOJO te hackie!");
}, 15000);

const arreglo = [5000, 60 ,90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);   
}


const http = require("http");
const server = http.createServer( (request, response) => {

    console.log(response);
    console.log(request.url);
    response.write("");
    response.end();

});

server.listen(3000);