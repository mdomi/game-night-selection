define([
    'underscore',
    'angular',
    'modules/games',
    'services/gamesservice',
    'services/eventsservice',
    'filters/playerrange',
    'filters/canplaywith',
    'filters/ownedby',
    'filters/duration',
    'filters/join'
], function (_, angular, games) {

    function GamesController($scope, GamesService, EventsService) {
        GamesService.getGames().then(function (games) {
            $scope.games = games;
        });
        $scope.events = EventsService.listEvents();
        $scope.potentialOwners = ['Mike', 'Scott', 'Brad', 'Jerry'];
        $scope.playerCount = 4;

        $scope.ownerFilter = $scope.potentialOwners.reduce(function (filter, owner) {
            filter[owner] = true;
            return filter;
        }, {});

        function ownerIsSelected(owner) {
            return $scope.ownerFilter[owner] === true;
        }

        $scope.$watch(function () {
            return Object.keys($scope.ownerFilter).filter(ownerIsSelected).sort().join(',');
        }, function (newOwners) {
            $scope.owners = newOwners;
        });
    }

    games.controller('GamesController', ['$scope', 'GamesService', 'EventsService', GamesController]);

    return GamesController;

});