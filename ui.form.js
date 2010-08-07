;(function($) {
	
	$.widget('ui.form', {
		
		_name: 'form',
		
		_widgets: {},
		
		_init: function() {
			publisher(this);
			subscriber(this);
		},
		
		addWidget: function(_name, _widget) {
			
			var self = this;
			this._widgets._name = _widget;
			
			this.addSubscribeHandler(_widget, '*', function(_event, _value) {
				
				self._publish(_event, _value);
			});
		},
		
		asPublisher: function() {
			
			return this;
		}
	});
})(jQuery);
