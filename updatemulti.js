const { client } = require('./dbconfig');
const updateMulti = async () => {
    try {
        const database = client.db("Office");
        const emp = database.collection("employees");
        const filter = {"gender": "Male"};
        const options = { upsert: true };
        const updateDoc = {
            $set: {
                country: "France",
            },
            };
        const result = await emp.update(filter, updateDoc, options);
    console.log(result)
    } catch (error) {
        
    } finally {
    await client.close()   
    }
}
updateMulti()