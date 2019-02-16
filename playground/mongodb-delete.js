//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');  // * object destructuring



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    let _id = new ObjectID('5c6877f68bb4cf386ad5f561');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat breakfast'}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat breakfast'}).then((result) => {
    //     console.log(result);
    // });
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: 'Inder'}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete(_id).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    // client.close();
});
