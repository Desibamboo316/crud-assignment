const { client } = require('./dbconfig');

const insertSingle = async()=> {
    try {
        const database = client.db("Office");
        const emp = database.collection("employees");
        const people = {
            "id": 1,
            "first_name": "Jeanette",
            "last_name": "Penddreth",
            "email": "jpenddreth0@census.gov",
            "gender": "Female",
            "ip_address": "26.58.193.2"
        };
        const result = await emp.insertOne(people);
        console.log(`Insert One Success_Id:${result.insertedId}`);
    } catch (error) {
        console.log(`insert failed`);
    } finally {
        await client.close();
    }
}
insertSingle()
