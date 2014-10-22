'use strict';

var SectionrAppConfig = {
	apikey : 'c8f8e8dc13aebc4717b4275eed065aec'
};

// Pass two args to create new!
var SectionrApp = angular.module( 'SectionrApp', [] )
	.config( [ '$routeProvider', '$httpProvider', function ( $routeProvider, $httpProvider )
	{
		// For CORS, otherwise not working with Softonic API
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
	} ] );
