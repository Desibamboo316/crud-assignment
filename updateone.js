const { client } = require('./dbconfig');
const updateSingle = async () => {
    try {
        const database = client.db("Office");
        const emp = database.collection("employees");
        const filter = {"first_name": "Jeanette"};
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                country: "italy",
            },
            };
        const result = await emp.updateOne(filter, updateDoc, options);
    console.log(result)
    } catch (error) {
        
    } finally {
    await client.close()   
    }
}
updateSingle()