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

| Property | Description | Example |
|---|---|---|
| `align` | Horizontal alignment of the element (not the content inside) | left, right, center |
| `valign` | Vertical alignment of the element (not the content inside) | top, middle, bottom |
| `text-align` | Horizontal text content alignment | left, right, center, justify |
| `text-valign` | Vertical text content alignment |
| `line-height` | Line height of text content. Works on whole block` |_Any of:_<br/>[pixel](#pixel),<br/> [non-negative-integer](#non-negative-integer),<br/> [percentage](#percentage) |
| `margin-top` |  |
| `margin-right` |  |
| `margin-bottom` |  |
| `margin-left` |  |
| `padding-top` |  |
| `padding-right` |  |
| `padding-bottom` |  |
| `padding-left` |  |
| `border-top-color` |  |
| `border-right-color` |  |
| `border-bottom-color` |  |
| `border-left-color` |  |
| `border-top-width` |  |
| `border-right-width` |  |
| `border-bottom-width` |  |
| `border-left-width` |  |
| `width` |  |
| `max-width` |  |
| `height` |  |
| `background-color` |  |
| `display` | Display mode. Hide elements or display columns as rows in custom media styles |




## Body Layout Specific
| Property | Description | 
|---|---|
| background-image |_(Optional)_  |