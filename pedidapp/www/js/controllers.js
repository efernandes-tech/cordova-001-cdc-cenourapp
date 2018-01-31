angular.module('starter')
.controller('HomeController', function($scope, ProdutosService) {
    ProdutosService.lista().then(function(dados){
        $scope.bolos = dados;
    });
})

angular.module('starter')
.controller('DetalheController', function($scope, ProdutosService, $stateParams) {
    ProdutosService.lista().then(function(dados){
        $scope.bolo = dados[$stateParams.boloId];
    });
});

angular.module('starter')
.controller('PedidoController', function($scope, ProdutosService, $stateParams, $http) {
    ProdutosService.lista().then(function(dados){
        $scope.bolo = dados[$stateParams.boloId];
    });
    $scope.dados = {};
    $scope.fecharPedido = function() {
        $http.get('http://cozinhapp.sergiolopes.org/novo-pedido', {
            params: {
                pedido: $scope.bolo.nome,
                info: $scope.dados.nome
                    + ' (' + $scope.dados.telefone + ') - '
                    + $scope.dados.endereco
            }
        });
    };
});
