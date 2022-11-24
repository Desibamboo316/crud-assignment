const { client } = require('./dbconfig');
const findMulti = async () => {
    try {
        const database = client.db("Office");
        const emp = database.collection("employees");
        const gender = { "gender": "Male" };
         const cursor = emp.find(gender);
    if ((await cursor.count()) === 0) {
      console.log("Oops! No data bro");
    } else {
        const people = await cursor.toArray();
    
            await people.forEach(pupil=> console.log(pupil))
    }    
    } catch (error) {
        console.log("failed");
    } finally {
        await client.close()
    }
}

findMulti()