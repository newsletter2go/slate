# Structure

```json
{
   "version":"3.0",
   "media":{
      "320px":{
         "max-width":600,
         "min-width":0
      }
   },
   "body":{
      "content":[
         {
            "title":"Content Wrapper",
            "type":"rows",
            "layout":{
               "default":{
                  "align":"center",
                  "background-color":"#ffffff",
                  "valign":"top",
                  "width":"600px"
               },
               "320px":{
                  "width":"320px"
               }
            },
            "content":[ ]
         }
      ],
      "layout":{
         "default":{
            "background-color":"#eeeeee",
            "width":"100%"
         },
         "320px":{
            "width":"320px"
         }
      }
   }
}
```

```yaml
version: '3.0'
media:
  320px:
    max-width: 600
    min-width: 0
body:
  content:
  - title: Content Wrapper
    type: rows
    layout:
      default:
        align: center
        background-color: "#ffffff"
        valign: top
        width: 600px
      320px:
        width: 320px
    content: []
  layout:
    default:
      background-color: "#eeeeee"
      width: 100%
    320px:
      width: 320px
```

*NML* tries to borrow the best aspects of HTML and CSS and wrap it in an easy-to-use JSON/YAML structure.  
If you know HTML and CSS you will immediately recognize the underlying naming conventions.  
Check out the basic example on the right to understand the following mandatory root elements and properties better.

### Mandatory root elements


| Element   | Description |
|-----------|-------------|
| `version` | most current version for *NML* is **3.0** |
| `media`   | define multiple responsive break points within the media property. [More information](#media) |
| `body`    | contains the contents of your email. Nest all rows, columns, text and image elements here. [More information](#elements-body) |


### Mandatory properties

| Property | Description |
|----------|-------------|
| `content`| The body element and all its children have a content property. You can either nest additional elements in here or set the actual content of the element [depending on the type](#element-types). |
| `layout` | The body element and all its children have a layout property. You can style your element here for the default view and the responsive view(s) that you defined. You can find a full list of supported styles [here](#layout). |
| `type`   | All children of the body have a type property which determines the type of your element. Can be [rows](#elements-rows), [columns](#elements-columns), [image](#elements-image) or [text](#elements-text). [More information](#element-types) | 
