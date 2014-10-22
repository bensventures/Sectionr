/**
 *
 */
( function ()
{
	'use strict';

	SectionrApp.directive( 'ngCatTree', function ( $compile )
	{
		return {
			restrict : 'A',
			scope : {
				family : '='
			},
			templateUrl : 'views/section-item.html',

			controller : [ '$scope', '$http', function ( $scope, $http )
			{
				$scope.getChildren = function ( parentId, inst )
				{
					var id = parentId || 1,
						instance = inst || $scope.$parent.instParent;

					console.log( $scope.$parent );

					$http.get( 'http://api.softonic.com/' + instance + '/sections.json?section_id=' + id + '&key=' + SectionrAppConfig.apikey )
					.success( function ( data )
					{
						$scope.family.children = data._embedded ? data._embedded.section : {};
						$scope.instParent = instance;
					} );
				};

				$scope.$parent.$watch( 'instance', function ( newInstance )
				{
					if ( newInstance )
					{
						$scope.family = {
							'name' : newInstance,
							'instance' : newInstance
						};

						$scope.getChildren( null, newInstance );
					}
				}, true );
			} ],

			// To stop the directive entering a loop we first remove the DOM before the compile
			compile : function ( tElement, tAttr )
			{
				var contents = tElement.contents().remove(),
					compiledContents;

				return function ( scope, iElement, iAttr )
				{
					if ( !compiledContents )
					{
						compiledContents = $compile( contents );
					}
					compiledContents( scope, function ( clone, scope )
					{
						iElement.append( clone );
					} );
				};
			}
		}
	} );

}() );
