var collegeControllers = angular.module('collegeControllers', []);

collegeControllers.controller('CollegeController', function($scope, $http, ngDialog){
	$http.get("data/collage_details.json").success(function(data){
		$scope.colleges = data;
	});
	$scope.setting = 'No Preference';
	$scope.yearButton = 'No Preference';
	$scope.accessType = 'No Preference';
	$scope.sizeButton = 'No Preference';
    $scope.contryButton = 'No Preference';
	$scope.minimumValue = 0;
    $scope.maximumValue = 5000000;
	$scope.open = function (dialogName) {
        if(dialogName == 'location') {
            $http.get("data/countrys.json").success(function(data){
                $scope.contries = data;
            });
        }
		ngDialog.closeAll();
        $scope.searchText = '';
		ngDialog.open({ template: 'templates/'+dialogName+ '.html',
            className: 'ngdialog-theme-default',
            scope: $scope
        });
	}

	$scope.filterYears = function(year){
		$scope.yearButton = year;
    	if(!year || year == '') {
    		$scope.yearButton = 'No Preference';
    	}
		$scope.filterYear = year;
		ngDialog.closeAll();
	};

	$scope.filterAccess = function(accessType){
		$scope.accessType = accessType;
    	if(!accessType || accessType == '') {
    		$scope.accessType = 'No Preference';
    	}
		$scope.filterAccessButton = accessType;
		ngDialog.closeAll();
	};

	$scope.filterSize = function(min,max,sizeButton){
        $scope.sizeButton = sizeButton;
    	if(!sizeButton || sizeButton == '') {
    		$scope.sizeButton = 'No Preference';
    	}
		$scope.minimumValue = parseInt(min);
		$scope.maximumValue = parseInt(max);
		ngDialog.closeAll();
	};
    $scope.filterSetting = function(setting){
    	$scope.setting = setting;
    	if(!setting || setting == '') {
    		$scope.setting = 'No Preference';
    	}
		$scope.filterSettingButton = setting;
		ngDialog.closeAll();
	};
	$scope.filterLocation = function(location){
        $scope.contryButton = location;
        if(!location || location == '') {
            $scope.contryButton = 'No Preference';
        }
		$scope.filterLocationButton = location;
		ngDialog.closeAll();
	};
    $scope.close = function(){
        ngDialog.closeAll();
    };
    $scope.clearFilters = function(){
        $scope.filterYear = '';
        $scope.filterLocationButton = '';
        $scope.filterSettingButton = '';
        $scope.minimumValue = 0;
        $scope.maximumValue = 5000000;
        $scope.filterAccessButton = '';
		$scope.setting = 'No Preference';
		$scope.yearButton = 'No Preference';
		$scope.accessType = 'No Preference';
		$scope.sizeButton = 'No Preference';
		$scope.contryButton = 'No Preference';
		$scope.minimumValue = 0;
		$scope.maximumValue = 5000000;


    };
});

 collegeControllers.filter('rangeFilter', function() {
    return function( items, rangeInfo ) {
        var filtered = [];
        var min = parseInt(rangeInfo.userMin);
        var max = parseInt(rangeInfo.userMax);
		
        // If time is with the range
        angular.forEach(items, function(item) {
            if( item.ENROLL_UG_TOTAL_DEG >= min && item.ENROLL_UG_TOTAL_DEG <= max ) {
                filtered.push(item);
            }
        });
        return filtered;
    };
});