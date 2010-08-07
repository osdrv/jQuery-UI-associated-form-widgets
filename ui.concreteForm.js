;(function($) {
	$.widget('ui.concreteForm', $.extend({}, $.ui.form.prototype, {
		
		_init: function() {
			
			$.ui.form.prototype._init.apply(this, arguments);
		}		
	}));
})(jQuery);

$.extend($.ui.concreteForm, {
	getter: 'asPublisher'
});
