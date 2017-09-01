## Columns

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

The element type `columns` is a structural element.  
All children elements (nested inside its content) will be displayed side-by-side as columns.

In order to style the element and change its appearance, use the [layout property](#elements-layout).