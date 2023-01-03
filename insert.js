const dbConnect = require('./mongodb');

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    {
      name: 'ana',
      email: 'ana@gmail.com',
      phone: 9876543210,
    },
    {
      name: 'Rio',
      email: 'Rio@gmail.com',
      phone: 9876544320,
    },
  ]);
  console.log(result);
};

insert();
