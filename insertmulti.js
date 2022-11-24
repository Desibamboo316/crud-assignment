const { client } = require('./dbconfig');
const insertMulti = async () => {
    try {
        const database = client.db("Office");
        const emp = database.collection("employees");
        const users =[{
  "id": 2,
  "first_name": "Giavani",
  "last_name": "Frediani",
  "email": "gfrediani1@senate.gov",
  "gender": "Male",
  "ip_address": "229.179.4.212"
}, {
  "id": 3,
  "first_name": "Noell",
  "last_name": "Bea",
  "email": "nbea2@imageshack.us",
  "gender": "Female",
  "ip_address": "180.66.162.255"
}, {
  "id": 4,
  "first_name": "Willard",
  "last_name": "Valek",
  "email": "wvalek3@vk.com",
  "gender": "Male",
  "ip_address": "67.76.188.26"
}]

        const result = await emp.insertMany(users);
        console.log(`inserted:${result.insertedCount}`);
    } catch (error) {
        console.log('failed insert');
    } finally {
        await client.close
    }
}
insertMulti()