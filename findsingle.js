const { client } = require('./dbconfig');
const findSingle = async () => {
    try {
        const database = client.db("Office");
        const emp = database.collection("employees");
        const Id = { "id": 4 };
        const result = await emp.findOne( Id);
        console.log(result);
    } catch (error) {
        
    } finally {
        await client.close()
    }
}

findSingle()