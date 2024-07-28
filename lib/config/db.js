import mongoose from "mongoose";


export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://ishikagupta4456:Seema123@cluster0.fguevak.mongodb.net/blog-app')

    console.log("DB Connected");
}
