var express=require("express");
var app=express();
var mongoose=require("mongoose");
var Contact=require("./models/contact")
var bodyParser=require("body-parser");
mongoose.connect("mongodb://localhost/techminds",function(){
	console.log("sucess");
})
var PORT=process.env.PORT || 3000

app.use(express.static(__dirname+"/public"))
app.use(bodyParser.json());

app.get("/techminds",function(req,res){

	Contact.getcontact(function(err,data){
		if(err){
			throw err;

		}
		console.log(data);
		res.json(data);
	})
});
app.post("/techminds",function(req,res){
	var body=req.body;//will fetch body details
	Contact.addcontact(body,function(err,data){
		if(err){
			throw err;
		}
		res.json(data);
	})

})
app.get("/techminds/:id",function(req,res){
	var id=req.params.id;
	console.log(id);
	Contact.getcontactById(id,function(err,data){

		console.log(data);
		if(err){
			throw err;
		}
		res.json(data);
	})
})
app.get("/techminds",function(req,res){

	console.log("employee details..")
})
app.put("/techminds/:id",function(req,res){
	var id=req.params.id;
	var body=req.body;
Contact.updatecontact(id,body,function(err,data){
if(err){
	throw err;
}
res.json(data)
})


})
app.delete("/techminds/:id",function(req,res){
	var id=req.params.id;
	Contact.removecontact(id,function(err,data){
		if(err){
			throw err
		}
		res.json(data);
	})
console.log("deleted record");
})
app.listen(PORT,function(){

	console.log("server is listening at port"+PORT);
})