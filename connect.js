const mongoose=require('mongoose');

const connectDB=async()=>{
   try {
    const conn=await mongoose.connect("mongodb+srv://vivekmgs0321:Vivek%400321@cluster0.nfh5bta.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology:true,        
    });
    console.log(`MongoDB connected ${conn.connection.host}`);
   } catch (error) {
    console.log(`Error: ${error.message}`);
   }
}
module.exports=connectDB;