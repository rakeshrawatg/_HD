/**
_HD (HTML Decorator) 

**/

var _HD;

(function () {
	
	_HD = function (tag, content, selfClosing) {
		content = content || '';
		return new HtmlDecorator(tag, content, selfClosing);
	}
	
	
	function HtmlDecorator (tag, content, selfClosing) {
		var css = [], 
			attrs = [];
		
	
		this.html = function () {
			var html = '';
			
			if (!tag) {
				return html;
			}
			
			html += '<' + tag;
			html += css.length ? ' class="' + css.join(' ') + '"' : '';
			html += attrs.length ? ' ' + attrs.join(' ') : '';
			html += selfClosing ? ' />' : '>';
			html += content || '';
			html += selfClosing ? '' : '</' + tag + '>';
			
			return  html;  
		}

		this.wrap = function (tag) {
			return new HtmlDecorator(tag, this.html());
		}
		
		this.addClass = function (value) {
			var arr = this.trim(value).split(' ');
			css = css.concat(arr); 

			return this;
		}

		this.removeClass = function (value) {
			var values = this.trim(value).split(' ');
			
			for (var i = 0; i < css.length; i++) {
				for (var j = 0; j < values.length; j++) {
					if (css[i] == values[j]) {
						css.splice(i, 1);
						values.splice(j, 1);
					}
				}
			}

			return this;
		}

		
		this.attr = function (attr, value, condition) {

			if (arguments.length === 3) {
				if (arguments[2] === true) {
					attrs.push(attr + '="' + value + '"'); 	
				}
			} else {
				attrs.push(attr + '="' + value + '"'); 
			}
			
			return this;
		}
		

		this.prepend = function (html) {
			var type = typeof html;
			
			html = type === 'string' ? html : html.html();
			content = html + content;
			
			return this;
		}
		
		
		this.append = function (html) {
			var type = typeof html;
			
			html = type === 'string' ? html : html.html();
			content = content + html;
			
			return this;
		}
		
		this.content = function (data) {
			content = data;
			return this;
		}
		
		this.empty = function () {
			content = '';
			return this;
		}
		
		this.trim = function (value) {
			return value.replace(/(\s+$)|(^\s+)/g, '').replace(/\s+/g, ' ');
		}
	}

})();