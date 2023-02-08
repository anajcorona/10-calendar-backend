const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        // await mongoose.connect(process.env.DB_CNN, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useCreateIndex: true
        // });
        await mongoose.connect(process.env.DB_CNN );
        console.log('DN ONLINE')

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar Datos');
    }
};


module.exports = {
    dbConnection
}