const { client } = require('./dbconfig');
const deleteOne = async () => {
    try {
        const database = client.db("Office");
        const emp = database.collection("employees");
        const filter = { "first_name": "Jeanette" };
        const result = await emp.deleteOne(filter);
        if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
    } catch (error) {
        
    } finally {
    await client.close()   
    }
}
deleteOne()