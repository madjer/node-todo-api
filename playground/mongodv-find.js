const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected do MongoDB server');
    const db = client.db('TodoApp');
    db.collection('Todos').find({
        _id: new ObjectID('5a8f4f3ad173f913d8bf3335')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    db.collection('Todos').find({
        _id: new ObjectID('5a8f4f3ad173f913d8bf3335')
    }).count().then((count) => {
        console.log('Todos');
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    db.collection('Users').find({
        name: 'Madjer'
    }).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    //client.close();
});