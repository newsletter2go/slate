# Element Styles / Layouts

> Example with type image

```json
{
   "title":"Example Image",
   "type":"image",
   "content":{
      "title":"Image",
      "type":"image",
      "content":{
         "src":"http://via.placeholder.com/350x150",
         "href":"http://www.example.org",
         "title":"Image Title"
      }
   }
}
```
```yaml
title: Example Image
type: image
content:
  title: Image
  type: image
  content:
    src: http://via.placeholder.com/350x150
    href: http://www.example.org
    title: Image Title
```

You can use the `layout` property to add styles and determine the appearance of elements.
  
  
## Shared layout properties
Layout properties shared by several block type definitions and the body

| Property | Description |
|---|---|
| `align` |_(Optional)_ Horizontal block alignment |
| `valign` |_(Optional)_ Vertical block alignment |
| `text-align` |_(Optional)_ Horizontal text content alignment |
| `text-valign` |_(Optional)_ Vertical text content alignment |
| `line-height` |_(Optional)_ Line height of text content. Works on whole block` |_Any of:_<br/>[pixel](#pixel),<br/> [non-negative-integer](#non-negative-integer),<br/> [percentage](#percentage) |
| `margin-top` |_(Optional)_  |
| `margin-right` |_(Optional)_  |
| `margin-bottom` |_(Optional)_  |
| `margin-left` |_(Optional)_  |
| `padding-top` |_(Optional)_  |
| `padding-right` |_(Optional)_  |
| `padding-bottom` |_(Optional)_  |
| `padding-left` |_(Optional)_  |
| `border-top-color` |_(Optional)_  |
| `border-right-color` |_(Optional)_  |
| `border-bottom-color` |_(Optional)_  |
| `border-left-color` |_(Optional)_  |
| `border-top-width` |_(Optional)_  |
| `border-right-width` |_(Optional)_  |
| `border-bottom-width` |_(Optional)_  |
| `border-left-width` |_(Optional)_  |
| `width` |_(Optional)_  |
| `max-width` |_(Optional)_  |
| `height` |_(Optional)_  |
| `background-color` |_(Optional)_  |
| `display` |_(Optional)_ Display mode. Hide elements or display columns as rows in custom media styles |




## Body Layout Specific
| Property | Description | 
|---|---|
| background-image |_(Optional)_  |