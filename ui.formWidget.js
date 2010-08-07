;(function($) {

	$.widget('ui.formWidget', {

		_name: 'widget',

		_init: function() {
			
			publisher(this);
			subscriber(this);
		},

		test: function(_event, _value) {

			this._publish(_event, _value);
		},
		
		asPublisher: function() {
			
			return this;
		}
	});
})(jQuery);
