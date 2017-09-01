## Image

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

The element type `image` is a content element.  
It will display the image that you set in its src in the content property. Optionally, you can also set a `href` and a `title`.
  
In order to style the element and change its appearance, use the [layout property](#elements-layout).