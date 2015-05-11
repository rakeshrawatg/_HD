# _HD: HTML Decorator
_HD (HTML Decorator) is a small javascript utility to creating raw HTML markup string.

## Example:

Using plain javascript:
```
var css = 'one two',
    cell = [1, 2, 3], 
    html;
    
html = '<table class="' + css + '">';
html += '<tr>';
html += '<td>' + cell[0] + '</td>';
html += '<td>' + cell[1] + '</td>';
html += '<td>' + cell[2] + '</td>';
html += '</tr>';
html += '</table>';
```

Using _HD:
```
var cell = [1, 2, 3], 
    html;
    
html 
  = _HD('tr', '')
  .append(_HD('td', cell[0]))
  .append(_HD('td', cell[1]))
  .append(_HD('td', cell[2]))
  .wrap('table').addClass('one two').html();
```

## Usage:

### addClass
Add css class to html element.

```
_HD('p', 'content').addClass('foo').addClass('bar baz').html();

// output: <p class="foo bar baz">content</p>
```


### attr
Add attribute to an element.

```
_HD('p', 'content').addClass('foo').attr('align', 'center').html();

// output: <p class="foo" align="center">content</p>
```

### append
Append html string to an element.

```
_HD('p', 'content').append(_HD('span', 'foo')).html();

// output: <p>content<span>foo</span></p>
```

### content
Add/Update content string of an element.

```
_HD('p', 'content1').content('content2').html();

// output: <p>content2</p>
```

### empty
Remove content string of an element.

```
_HD('p', 'content1').empty().html();

// output: <p></p>
```

### prepend
Prepend html string to an element.

```
_HD('p', 'content').prepend(_HD('span', 'foo')).html();

// output: <p><span>foo</span>content</p>
```

### removeClass
Remove css class from html element.

```
_HD('p', 'content').addClass('foo bar baz').removeClass('bar').html();

// output: <p class="foo baz">content</p>
```

### wrap
Wrap element.

```
_HD('p', 'content1').wrap('div', '').html();

// output: <div><p>content1</p></div>
```
