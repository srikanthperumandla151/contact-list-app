var mongoose=require("mongoose");
var contactSchema=mongoose.Schema({
name:{
	type:String,
	required:true

},
email:{
	type:String,required:true
},
mobile:{
	type:String,required:true
}
});
var Contact=module.exports=mongoose.model("contact",contactSchema);//module.exports need to export models
module.exports.getcontact=function(callback){
Contact.find(callback)
}
module.exports.addcontact=function(contact,callback){
	//var ctc=new contact(contact);
	Contact.create(contact,callback);
}
module.exports.getcontactById=function(id,callback){
	var query={_id:id}
	Contact.findById(query,callback);
}
module.exports.updatecontact=function(id,contact,callback)
{
	Contact.update({_id:id},
		{$set:{name:contact.name,
			email:contact.email,
			mobile:contact.mobile}},callback)
}
module.exports.removecontact=function(id,callback){
 
 Contact.remove({_id:id},callback);
}