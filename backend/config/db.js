import mongoose from "mongoose"

const connectDb = async ()=> {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB CONNECTED SUCCESFULLY")
    }
    catch(error){
        console.log(`message : ${error.message} `)
        process.exit(1);
    }
}

export default connectDb