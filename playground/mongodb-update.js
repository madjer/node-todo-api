const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    } 
    console.log('Connected do MongoDB server');
    const db = client.db('TodoApp');
    
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a8f4ea67e2db128c4a5e537')
    }, {
        $set: {
            completed: false
        }
    }, {
        returnOrinal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a8e193626c3600124622921')
    }, {
        $inc: {
            age: 32
        }
    }, {
        returnOrinal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});