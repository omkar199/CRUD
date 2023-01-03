const dbConnect = require('./mongodb');

const deleteData = async () => {
  const db = await dbConnect();

  const result = await db.deleteMany({
    name: 'hello',
  });
  console.log(result);
};

deleteData();
