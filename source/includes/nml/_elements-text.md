## Text

> Example with type text

```json
{
   "title":"Example Text",
   "type":"text",
   "content":{
      "title":"Text",
      "type":"text",
      "content":"You can use <b>HTML</b> in <a href='http://example.org'>here</a>"
   }
}
```
```yaml
title: Example Text
type: text
content:
  title: Text
  type: text
  content: You can use <b>HTML</b> in <a href='http://example.org'>here</a>
```

The element type `text` is a content element.  
It will display any type of HTML but we recommend that you only use inline tags for cross-client compatibility.  
Here are some of the most used HTML tags that will work: `<br />`, `<span />`, `<b />`, `<i />` and `<a />`.  
Using HTML tags like `<h1 />` and `<p />` will work in most clients but not pixel-perfect. Instead we recommend styling a `<span />` or using `<br />`.  

In order to style the element and change its appearance, use the [layout property](#elements-layout).