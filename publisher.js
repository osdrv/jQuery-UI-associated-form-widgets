var publisher = function(_obj) {
	
	_extends = {

		_name: '',

		_subscribers: {},

		subscribe: function(_event, _subscriber) {

			console.log('subscribed for %s event: %s', this._name, _event);

			if (!$.isArray(this._subscribers[_event])) {

				this._subscribers[_event] = [];
			}

			this._subscribers[_event].push(_subscriber);
		},
		
		unsubscribe: function(_event, _subscriber) {
			
			if ($.isArray(this._subscribers[_event])) {
				
				var _index = $.inArray(_subscriber, this._subscribers[_event]);
				
				if (_index !== -1) {
					
					this._subscribers[_event].splice(_index, 1);
				}
			}
		},
		
		_publish: function(_event, _value) {

			var _events = ['*', _event],
			self = this;

			console.log('%s publish event: %s', this._name, _event);
			
			$.each(_events, function(_i, _event_type) {

				if ($.isArray(self._subscribers[_event_type])) {

					$.each(self._subscribers[_event_type], function(_o, _subscriber) {
						
						if (!$.isFunction(_subscriber._notify)) {

							throw "Object should be an instance of subscriber";
						}

						_subscriber._notify(_event, _value);
					});
				}
			});
		}
	};
	
	$.each(_extends, function(_name, _value) {
		if (!_obj[_name]) {
		
			_obj[_name] = _value;
		}
	})
};