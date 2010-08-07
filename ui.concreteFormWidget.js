;(function($) {
	$.widget('ui.concreteFormWidget', $.extend({}, $.ui.formWidget.prototype, {
		
		_init: function() {
			
			$.ui.formWidget.prototype._init.apply(this, arguments);
		}
	}));
})(jQuery);

$.extend($.ui.concreteFormWidget, {
	getter: 'asPublisher'
});
