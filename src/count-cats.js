





module.exports = function countCats(matrix) {
   var counter=0;
   for(var i=0;i<matrix.length;i++){
	   
	   if(Array.isArray(matrix[i])){
		   for(var k=0;k < matrix[i].length; k++){
				if (matrix[i][k]=='^^'){
					counter += 1;
				}  
		   }
	   }
   }
   return counter;
};

