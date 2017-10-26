var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
	res.header('Access-Control-Allow-Origin',"*");
	fs.readFile("ljy.txt","utf-8",function(err,data){
		if (err) {
			console.log(err)
		}else{
			console.log(data);
			fs.writeFile("ljy.txt",data,function(err){
				res.send(data);
			})
		}
	})
});
module.exports = router;
