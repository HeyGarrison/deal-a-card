function MainCtrl(dataFactory, $scope) {

    $scope.iteration = 0;
    $scope.revealedCards = new Array;
    

    dataFactory.success(function(data) {

        $scope.hiddenCards = data.cards;
        $scope.totalLength = data.cards.length;
        $scope.shuffle();
    });

    $scope.dealOneCard = function() {
        
        if($scope.iteration < $scope.totalLength) {
            var cardObj = {'suit': $scope.hiddenCards[$scope.iteration].suit, "cardNum": $scope.hiddenCards[$scope.iteration].cardNum}  
            $scope.revealedCards.push(cardObj);
            $scope.iteration++;
        }
        
        if($scope.iteration === $scope.totalLength) {
            $scope.revealedCards = new Array;
            $scope.shuffle();
            $scope.iteration = 0;
        }

    }

    $scope.shuffle = function() {
        $scope.hiddenCards.sort(function(a, b){return 0.5 - Math.random()});
    }


};

MainCtrl.$inject = ['dataFactory', '$scope'];