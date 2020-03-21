module.exports =  function createDreamTeam(str) {
	if(str==null){return false;}
	var str1=[];
	 var arr=[];
	var arr1;
	
	
	for(var k=0;k<str.length;k++){
		if(Array.isArray(str[k])){
			
			continue;
		}
		if(typeof(str[k])=="object"){
			continue;
		}
		
		if (typeof(str[k])=='string'){
			var s=str[k].trim();
			if(str[k].match(/[a-zA-Z]/)){
				var t=s[0].toUpperCase();
				arr.push(t);
			}
		}
	}
	
	return arr.sort().join('');
};
