app.directive('focusEle', function () {
  return ({
        restrict: 'A',
        link: function(scope, element) {
            element.on('focus',function () {
                element.parent().addClass('focus');
            });
            element.on('blur',function () {
                element.parent().removeClass('focus');
            });
        }
    });
});