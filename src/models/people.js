import mongoose from 'mongoose'
const peopleSchema = new mongoose.Schema(
  {
   name:{type:String,required:true}, 
   cpf:{type:String,required:true}, 
   birthDay:{type:String,required:true}, 
   email:{type:String,required:true}, 
   password:{type:String,required:true},  
   address:{type:String,required:true}, 
   number:{type:String,required:true}, 
   complement:{type:String,required:true}, 
   state:{type:String,required:true}, 
   country:{type:String,required:true}, 
   zipCode:{type:String,required:true} 
  }
)

const peoples = mongoose.model("peoplesaaa",peopleSchema)
export default peoples