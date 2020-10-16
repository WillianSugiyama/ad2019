import mongoose from "mongoose";

const connect = async (dbhost, dbuser, dbpass, db, dbport) => {
  try {
    await mongoose.connect(
      `mongodb://${dbuser}:${dbpass}@${dbhost}:${dbport}/${db}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    mongoose.set("useFindAndModify", false);

    console.log("############# CONNECTED ON DATABASE #############");
  } catch (error) {
    console.log(`Error to connect on database: ${error}`);
  }
};

export default connect;
