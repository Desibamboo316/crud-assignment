const { client } = require('./dbconfig');
const deleteMulti = async () => {
    try {
        const database = client.db("Office");
        const emp = database.collection("employees");
        const filter = { "gender": "Female" };
        const result = await emp.deleteMany(filter);
        console.log("Deleted"+" "+result.deletedCount);
    } catch (error) {
        
    } finally {
    await client.close()   
    }
}
deleteMulti()