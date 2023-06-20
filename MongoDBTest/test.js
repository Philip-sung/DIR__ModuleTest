import { MongoClient } from "mongodb";

const url = 'mongodb:/id:pw@122.47.75.171:27017'
const client = new MongoClient(url);

const dbName = 'pserver';

async function main(){
    await client.connect();
    console.log('Successfully connected to DB server');
    const db = client.db(dbName);
    
    const usersCollection = db.collection("users");
    usersCollection.updateOne({id:"PhilipSung"},{$set:{pw:'960107'}});
    const userCursor = usersCollection.find()

    for await(const user of userCursor){
        console.log(`${user.id} : ${user.pw}`);
    }
}

main()
    .then()
    .catch(console.error)
    .finally(() => client.close());
