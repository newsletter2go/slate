# Element types

*NML* supports **structural elements** and **content elements**.

### Structural elements

> Example with type rows

```json
{
   "title":"Example Rows",
   "type":"rows",
   "content":[
      {
         "title":"Top Row",
         "type":"text",
         "content":"This will be shown on top"
      },
      {
         "title":"Bottom Row",
         "type":"text",
         "content":"This will be shown on the bottom"
      }
   ]
}
```
```yaml
title: Example Rows
type: rows
content:
- title: Top Row
  type: text
  content: This will be shown on top
- title: Bottom Row
  type: text
  content: This will be shown on the bottom
```


> Example with type columns

```json
{
   "title":"Example Columns",
   "type":"columns",
   "content":[
      {
         "title":"Left Column",
         "type":"text",
         "content":"This will be shown on the left"
      },
      {
         "title":"Right Column",
         "type":"text",
         "content":"This will be shown on the right"
      }
   ]
}
```
```yaml
title: Example Columns
type: columns
content:
- title: Left Column
  type: text
  content: This will be shown on the left
- title: Right Column
  type: text
  content: This will be shown on the right
```

Structural elements are used to structure your email. If you think of a table this would be the rows (TR) and columns (TD).  
The following structural elements can be used: [rows](#elements-rows), [columns](#elements-columns) and (only) the root level the [body](#elements-body)

| Type      | Description |
|-----------|-------------|
| `rows`    | This type determines that *all children* will be displayed as rows. If you know HTML, this would be a TR. [More information](#elements-rows) |
| `columns` | This type determines that *all children* will be displayed as columns. If you know HTML, this would be a TD. [More information](#elements-columns) |

<div class="alert alert-info">It's very important to understand that <code>rows</code> and <code>columns</code> affect the <b>children</b> and not the element itself.</div>


### Content elements

Content elements insert content into your email like [images](#element-image), [text](#element-text), [buttons](#element-button), [dividers](#element-divider)

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

| Type      | Description |
|-----------|-------------|
| `image`   | Displays an image. Define src, href and title in its content. [More information](#elements-image) |
| `text`    | Displays text. Define it in its content. You can use HTML there. [More information](#elements-text) |
| `button`    | Displays button. Define it in its content. You can use HTML there. [More information](#elements-button) |
| `divider`    | Displays divider. Define it in its content. You can use HTML there. [More information](#elements-divider) |