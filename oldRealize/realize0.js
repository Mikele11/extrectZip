/*
function parser(file){
	var data = fs.readFileSync(path.join(__dirname, 'extract/'+file), { encoding : 'utf8'});
	var options = {
	  delimiter : ',', // optional 
	  quote     : '"' // optional 
	};
	csvjson.toObject(data, options);
	var stuge = {
	  name: "string",
	  phone: "string",
	  person: {
		firstName: {
		"type": "string"
		},
	   lastName: {
		"type": "string"
		},
	  },
	  amount: "number",
	  date: "date",
	  costCenterNum: "string"
	};
	var pot = data.indexOf('"date"')+7;
	var copyFile = data;
	var copy;
	while (copyFile.length>100){
		//----------------------------------FIRST NAME
		copyFile = copyFile.substring(pot+1,copyFile.length);
		copy = copyFile.substring(0,copyFile.indexOf('"')+1);
		stuge.person.firstName = '"'+ copy;
		copyFile = copyFile.substring(copy.length+2,copyFile.length);
		//console.log(stuge.person.firstName);

		//----------------------LAST nAME
		copyFile = copyFile.substring(1,copyFile.length);
		copy = copyFile.substring(0,copyFile.indexOf('"')+1);
		copyFile = copyFile.substring(copy.length+2,copyFile.length);
		stuge.person.lastName = '"'+ copy;
		//console.log(stuge.person.lastName);

		//-------------USER
		copyFile = copyFile.substring(1,copyFile.length);
		copy = copyFile.substring(0,copyFile.indexOf('"')+1);
		copyFile = copyFile.substring(copy.length+2,copyFile.length);
		var user = '"'+ copy;
		//console.log(user);

		//-------------EMAIL
		copyFile = copyFile.substring(1,copyFile.length);
		copy = copyFile.substring(0,copyFile.indexOf('"')+1);
		copyFile = copyFile.substring(copy.length+2,copyFile.length);
		var email = '"'+ copy;
		//console.log(email);

		//--------------NAME
		copyFile = copyFile.substring(1,copyFile.length);
		copy = copyFile.substring(0,copyFile.indexOf('"')+1);
		copyFile = copyFile.substring(copy.length+2,copyFile.length);
		stuge.name = '"'+ copy;
		//console.log(stuge.name);

		//-------------PHONE
		copyFile = copyFile.substring(1,copyFile.length);
		copy = copyFile.substring(0,copyFile.indexOf('"')+1);
		copyFile = copyFile.substring(copy.length+2,copyFile.length);
		stuge.phone = '"'+ copy;
		//console.log(stuge.phone);

		//-----------CC
		copyFile = copyFile.substring(1,copyFile.length);
		copy = copyFile.substring(3,copyFile.indexOf('"')+1);
		copyFile = copyFile.substring(copy.length+2,copyFile.length);
		stuge.costCenterNum = '"'+ copy;
		//console.log(stuge.costCenterNum);

		//-------AMAUNT
		copyFile = copyFile.substring(1,copyFile.length);
		copy = copyFile.substring(2,copyFile.indexOf('"')+1);
		copy = copy.substring(0,copy.indexOf('||'));
		copyFile = copyFile.substring(copy.length+4,copyFile.length);
		stuge.amount = '"'+ copy+'"';
		//console.log(stuge.amount);
		
		//-----------DATE   
		copyFile = copyFile.substring(1,copyFile.length);
		copy = copyFile.substring(0,copyFile.indexOf('"')+1);
		copyFile = copyFile.substring(copy.length+1,copyFile.length);
		var day =copy.substring(0,copy.indexOf('/'));
		var p =copy.indexOf('/')+1;
		var ccop=copy.substring(p);
		var mounth =ccop.substring(0,ccop.indexOf('/')); 
		var year = ccop.slice(-5);
		year = year.substring(0, year.length - 1);		
		stuge.date = '"'+ year+'/'+mounth+'/'+day+'"';
		pot = 0;
		//console.log(stuge.date);

		// -   WRITE TO FILE
		var str = '';
		str ='{'+'\n'+'  "name":'+stuge.name+'\n'+'  "phone":'+stuge.phone+'\n'+'  "person": {'+'\n'+'   "firstName":'+stuge.person.firstName+'\n'+'   "lastName":'+stuge.person.lastName+'\n'+'   }'+'\n'+'  "amount":'+stuge.amount+'\n'+'  "date":'+stuge.date+'\n'+'  "costCenterNum":'+stuge.costCenterNum+'\n'+'}'+'\n';
		fs.appendFileSync("json/"+'MyJsonParseFile'+".json", str+'\n');  
	};//end while  
};//end function
*/
/*
var folder = 'extract'; 
fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function(file) {
		  parser(file);
  })
});
*/