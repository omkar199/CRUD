const dbConnect = require('./mongodb');

const update = async () => {
  const db = await dbConnect();
  //updateOne for 1st entry match
  //update for all match
  const result = await db.updateOne(
    {
      name: 'hello',
    },
    {
      $set: { name: 'World', email: 'hello@gmail.com' },
    }
  );
  console.log(result);
};

update();
