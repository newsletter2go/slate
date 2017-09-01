## Rows

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

The element type `rows` is a structural element.  
All children elements (nested inside its content) will be displayed as underneath each other as rows.

In order to style the element and change its appearance, use the [layout property](#elements-layout).