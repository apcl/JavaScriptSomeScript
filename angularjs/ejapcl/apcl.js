angular
	.module('moduleapcl',[])
	.controller('controllerapcl', function(){
		this.edad = 0;

		this.sumauno = function(){
			this.edad = this.edad + 1;
		}

		this.restauno = function(){
			this.edad = this.edad - 1;
		}
	});