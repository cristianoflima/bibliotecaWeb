app.controller('CadUsuarioController',['$scope','md5','$http', function($scope, md5,$http){
	$scope.titulo = "Cadastro de Usuários";
	$scope.usuario={};
	$scope.emailConfirmacao = null;
	$scope.senha = null;
	$scope.senhaConfirmacao = null;
	
	$scope.ufs = [
        {"sigla": "AC"},
        {"sigla": "AL"},
        {"sigla": "AP"},
        {"sigla": "AM"},
        {"sigla": "BA"},
        {"sigla": "CE"},
        {"sigla": "DF"},
        {"sigla": "ES"},
        {"sigla": "GO"},
        {"sigla": "MA"},
        {"sigla": "MT"},
        {"sigla": "MS"},
        {"sigla": "MG"},
        {"sigla": "PA"},
        {"sigla": "PB"},
        {"sigla": "PR"},
        {"sigla": "PE"},
        {"sigla": "PI"},
        {"sigla": "RJ"},
        {"sigla": "RN"},
        {"sigla": "RS"},
        {"sigla": "RO"},
        {"sigla": "RR"},
        {"sigla": "SC"},
        {"sigla": "SP"},
        {"sigla": "SE"},
        {"sigla": "TO"}

    ];
	
	$scope.uf = $scope.ufs[12];
	
	var validar = function(dados){
		if(dados.email != $scope.emailConfirmacao)
			return false;
		
		else if($scope.senha != $scope.senhaConfirmacao)
			return false;
		
		else{
			$scope.usuario.uf = $scope.uf.sigla;
			$scope.usuario.senha = md5.createHash($scope.senha);
			$scope.usuario.status = 1;
			return true;
		}
			
			
	}
	
	
	$scope.salvar = function(){
		if(validar($scope.usuario)){
			var url = "http://localhost:8587/biblioteca/cadastro"
			
			$http.post(url, $scope.usuario)
			   .then(
			       function(response){
			        console.log(response.data);
			       }, 
			       function(erro){
			    	   console.log(response.erro);
			       }
			    );
		}			
		else
			console.log('erro ao validar campos')
	}
	
	
	
	
}]);