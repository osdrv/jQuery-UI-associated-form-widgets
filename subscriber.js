var subscriber = function (_obj) {
	
	_extends = {

		_name: '',

		_subscribe_handlers: {},

		_notify: function(_event, _value) {

			console.log('%s catched event: %s', this._name, _event);

			var _events = ['*', _event],
			self = this;

			$.each(_events, function(_i, _event_type) {

				if (self._subscribe_handlers[_event_type]) {

					self._subscribe_handlers[_event_type].call(this, _event, _value);
				}	
			});
		},

		addSubscribeHandler: function(_publisher, _event, _handler) {

			console.log('%s subscribe handler added', this._name);

			if (!$.isFunction(_handler)) {

				throw 'Handler should be a function instance';
			}
			
			if (!$.isFunction(_publisher.subscribe)) {

				throw 'Publisher object should be a correct publisher instance';
			}

			this._subscribe_handlers[_event] = _handler;

			_publisher.subscribe(_event, this);
		},
		
		removeSubscribeHandler: function(_publisher, _event) {
			
			delete this._subscribe_handlers[_event];
			_publisher.unsubscribe(_event, this);
		}
	};
	
	$.each(_extends, function(_name, _value) {
		if (!_obj[_name]) {
			_obj[_name] = _value;
		}
	})
};