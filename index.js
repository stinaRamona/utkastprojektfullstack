const Hapi = require("@hapi/hapi"); 
const mongoose = require("mongoose");  
require('dotenv').config(); 

const init = async () => {

    const server = Hapi.server({
      port: 5000,
      host: 'localhost',
    }); 

    //ansluter till databas || Behöver lägga till databas 
    mongoose.connect(process.env.DATABASE).then(() => {
        console.log("Ansluten till MongoDB"); 
    }).catch((error) => {
        console.log("Fel vid anslutning:" + error); 
    });

    //hämtar routes 
    const routes = require("./routes/routes");
    server.route(routes);

    //Ansluter till server 
    await server.start();
    console.log('Server running on %s', server.info.uri);
} 

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init(); 