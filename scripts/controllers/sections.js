'use strict';

function SectionCards ( $scope )
{
	var baseColumns = 10;

	$scope.cards = [1];
	$scope.col = 4;

	$scope.options = [
		{
			name : 'ES',
			value : 'es'
		},{
			name : 'EN',
			value : 'en'
		},{
			name : 'FR',
			value : 'fr'
		},{
			name : 'DE',
			value : 'de'
		},{
			name : 'IT',
			value : 'it'
		},{
			name : 'PL',
			value : 'pl'
		},{
			name : 'NL',
			value : 'nl'
		},{
			name : 'JP',
			value : 'jp'
		},{
			name : 'ZN',
			value : 'zn'
		},
	];

	$scope.addCard = function ()
	{
		$scope.cards.push( 1 );
		$scope.col = Math.ceil( baseColumns / $scope.cards.length );
	}
}

