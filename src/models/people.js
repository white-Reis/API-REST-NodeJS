import mongoose from 'mongoose'
const peopleSchema = new mongoose.Schema(
  {
   name:{type:String,required:true}, 
   cpf:{type:String,required:true,minlength:11,maxlength:11}, 
   birthDate:{type:Date,max: '01-01-2004',required:true}, 
   email:{type:String,validate:/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,required:true}, 
   password:{type:String,required:true,minlength:6},  
   address:{type:String,required:true}, 
   number:{type:String,required:true}, 
   complement:{type:String,required:true}, 
   state:{type:String,required:true}, 
   country:{type:String,required:true}, 
   zipCode:{type:String,required:true,minlength:8} },
   {
    versionKey: false
   }
)
const peoples = mongoose.model("peoples",peopleSchema)
export default peoples