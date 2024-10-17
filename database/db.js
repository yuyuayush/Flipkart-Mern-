
import mongoose from "mongoose";

export const Connection = async(username,password)=>{
    const URL =`mongodb+srv://${username}:${password}@cluster0.mgapz.mongodb.net/`;
    try {
        await mongoose.connect(URL);
        console.log('connected');
    } catch (error) {
        console.log(error);
    }
}