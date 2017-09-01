# Example

```json
{
   "name":"One column - two columns",
   "author":"Koch",
   "version":3,
   "media":{
      "320px":{
         "max-width":600,
         "min-width":0
      }
   },
   "styles":{
      "nl2go_class_headline":{
         "title":"Headline",
         "properties":{
            "color":"#677876",
            "font-size":"26px"
         }
      },
      "nl2go_class_imprint":{
         "title":"Imprint",
         "properties":{
            "color":"#999999",
            "font-size":"12px",
            "font-style":"italic"
         }
      },
      "default-link":{
         "title":"Link",
         "properties":{
            "color":"#0000ff",
            "text-decoration":"none"
         }
      },
      "default":{
         "title":"Default",
         "properties":{
            "color":"#666666",
            "font-family":"Arial, Helvetica, sans-serif",
            "font-size":"14px",
            "line-height":"130%"
         }
      }
   },
   "body":{
      "layout":{
         "default":{
            "background-color":"#eeeeee",
            "width":"100%"
         },
         "320px":{
            "width":"320px"
         }
      },
      "content":[
         {
            "title":"Content",
            "type":"rows",
            "layout":{
               "default":{
                  "align":"center",
                  "background-color":"#ffffff",
                  "width":"600px"
               },
               "320px":{
                  "width":"320px"
               }
            },
            "content":[
               {
                  "title":"Web Version",
                  "type":"text",
                  "layout":{
                     "default":{
                        "align":"center",
                        "text-align":"center",
                        "width":"100%"
                     }
                  },
                  "content":"Click here to see the new <a class=\"link\" href=\"http://example.org\">Web version</a>."
               },
               {
                  "title":"Header Image",
                  "type":"image",
                  "layout":{
                     "default":{
                        "align":"left",
                        "width":"600px"
                     },
                     "320px":{
                        "align":"left",
                        "width":"100%"
                     }
                  },
                  "content":{
                     "src":"http://www.newsletter2go.de/templates/img/600x150.png"
                  }
               },
               {
                  "title":"Headline",
                  "type":"text",
                  "layout":{
                     "default":{
                        "align":"left",
                        "padding-bottom":"0px",
                        "padding-left":"20px",
                        "padding-right":"20px",
                        "padding-top":"30px",
                        "valign":"top",
                        "width":"100%"
                     },
                     "320px":{
                        "padding-left":"10px",
                        "padding-right":"10px",
                        "padding-top":"15px",
                        "width":"100%"
                     }
                  },
                  "content":"<span class=\"nl2go_class_headline\">Click here to enter a headline.</span>"
               },
               {
                  "title":"Text Block",
                  "type":"text",
                  "layout":{
                     "default":{
                        "align":"left",
                        "padding-bottom":"10px",
                        "padding-left":"20px",
                        "padding-right":"20px",
                        "padding-top":"20px",
                        "valign":"top",
                        "width":"100%"
                     },
                     "320px":{
                        "padding-bottom":"0px",
                        "padding-left":"10px",
                        "padding-right":"10px",
                        "padding-top":"10px",
                        "width":"100%"
                     }
                  },
                  "content":"Click here to enter your text. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
               },
               {
                  "title":"2 Columns",
                  "type":"columns",
                  "layout":{
                     "default":{
                        "padding-left":"10px",
                        "padding-right":"10px",
                        "padding-top":"10px",
                        "width":"100%"
                     },
                     "320px":{
                        "display":"rows",
                        "padding-left":"0px",
                        "padding-right":"0px",
                        "padding-top":"0px",
                        "width":"100%"
                     }
                  },
                  "content":[
                     {
                        "title":"Left Column",
                        "type":"rows",
                        "layout":{
                           "default":{
                              "padding-left":"10px",
                              "padding-right":"10px",
                              "padding-top":"10px",
                              "valign":"top",
                              "width":"50%"
                           },
                           "320px":{
                              "padding-left":"10px",
                              "padding-right":"10px",
                              "padding-top":"20px",
                              "width":"100%"
                           }
                        },
                        "content":[
                           {
                              "title":"Left Image",
                              "type":"image",
                              "layout":{
                                 "default":{
                                    "width":"270px"
                                 },
                                 "320px":{
                                    "align":"center",
                                    "text-align":"center",
                                    "width":"270px"
                                 }
                              },
                              "content":{
                                 "src":"http://www.newsletter2go.de/templates/img/270x150.png"
                              }
                           },
                           {
                              "title":"Left Text",
                              "type":"text",
                              "layout":{
                                 "default":{
                                    "align":"left",
                                    "padding-bottom":"10px",
                                    "padding-top":"20px",
                                    "text-align":"left",
                                    "width":"100%"
                                 },
                                 "320px":{
                                    "align":"left",
                                    "padding-bottom":"0px",
                                    "padding-top":"15px",
                                    "text-align":"left",
                                    "width":"100%"
                                 }
                              },
                              "content":"Click here to enter your text. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
                           }
                        ]
                     },
                     {
                        "title":"Right Column",
                        "type":"rows",
                        "layout":{
                           "default":{
                              "padding-left":"10px",
                              "padding-right":"10px",
                              "padding-top":"10px",
                              "valign":"top",
                              "width":"50%"
                           },
                           "320px":{
                              "padding-left":"10px",
                              "padding-right":"10px",
                              "padding-top":"20px",
                              "width":"100%"
                           }
                        },
                        "content":[
                           {
                              "title":"Right Image",
                              "type":"image",
                              "layout":{
                                 "default":{
                                    "width":"270px"
                                 },
                                 "320px":{
                                    "align":"center",
                                    "text-align":"center",
                                    "width":"270px"
                                 }
                              },
                              "content":{
                                 "src":"http://www.newsletter2go.de/templates/img/270x150.png"
                              }
                           },
                           {
                              "title":"Right Text",
                              "type":"text",
                              "layout":{
                                 "default":{
                                    "align":"left",
                                    "padding-bottom":"10px",
                                    "padding-top":"20px",
                                    "text-align":"left",
                                    "width":"100%"
                                 },
                                 "320px":{
                                    "align":"left",
                                    "padding-bottom":"0px",
                                    "padding-top":"15px",
                                    "text-align":"left",
                                    "width":"100%"
                                 }
                              },
                              "content":"Click here to enter your text. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
                           }
                        ]
                     }
                  ]
               },
               {
                  "title":"Imprint",
                  "type":"text",
                  "layout":{
                     "default":{
                        "align":"center",
                        "padding-bottom":"20px",
                        "padding-top":"20px",
                        "text-align":"center",
                        "width":"100%"
                     },
                     "320px":{
                        "align":"center",
                        "text-align":"center",
                        "width":"100%"
                     }
                  },
                  "content":"<span class=\"nl2go_class_imprint\">Legal Notice:<br/>Your name<br/>your address<br/>your postal code {{ company.city}}<br/></span><a href=\"http://example.org\"><span class=\"nl2go_class_imprint\">Click here to unsubscribe</span></a>"
               }
            ]
         }
      ]
   }
}
```

```yaml
name: One column - two columns
author: Koch
version: 3
media:
  320px:
    max-width: 600
    min-width: 0
styles:
  nl2go_class_headline:
    title: Headline
    properties:
      color: "#677876"
      font-size: 26px
  nl2go_class_imprint:
    title: Imprint
    properties:
      color: "#999999"
      font-size: 12px
      font-style: italic
  default-link:
    title: Link
    properties:
      color: "#0000ff"
      text-decoration: none
  default:
    title: Default
    properties:
      color: "#666666"
      font-family: Arial, Helvetica, sans-serif
      font-size: 14px
      line-height: 130%
body:
  layout:
    default:
      background-color: "#eeeeee"
      width: 100%
    320px:
      width: 320px
  content:
  - title: Content
    type: rows
    layout:
      default:
        align: center
        background-color: "#ffffff"
        width: 600px
      320px:
        width: 320px
    content:
    - title: Web Version
      type: text
      layout:
        default:
          align: center
          text-align: center
          width: 100%
      content: Click here to see the new <a class="link" href="http://example.org">Web version</a>.
    - title: Header Image
      type: image
      layout:
        default:
          align: left
          width: 600px
        320px:
          align: left
          width: 100%
      content:
        src: http://www.newsletter2go.de/templates/img/600x150.png
    - title: Headline
      type: text
      layout:
        default:
          align: left
          padding-bottom: 0px
          padding-left: 20px
          padding-right: 20px
          padding-top: 30px
          valign: top
          width: 100%
        320px:
          padding-left: 10px
          padding-right: 10px
          padding-top: 15px
          width: 100%
      content: <span class="nl2go_class_headline">Click here to enter a headline.</span>
    - title: Text Block
      type: text
      layout:
        default:
          align: left
          padding-bottom: 10px
          padding-left: 20px
          padding-right: 20px
          padding-top: 20px
          valign: top
          width: 100%
        320px:
          padding-bottom: 0px
          padding-left: 10px
          padding-right: 10px
          padding-top: 10px
          width: 100%
      content: Click here to enter your text. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
        magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet.
    - title: 2 Columns
      type: columns
      layout:
        default:
          padding-left: 10px
          padding-right: 10px
          padding-top: 10px
          width: 100%
        320px:
          display: rows
          padding-left: 0px
          padding-right: 0px
          padding-top: 0px
          width: 100%
      content:
      - title: Left Column
        type: rows
        layout:
          default:
            padding-left: 10px
            padding-right: 10px
            padding-top: 10px
            valign: top
            width: 50%
          320px:
            padding-left: 10px
            padding-right: 10px
            padding-top: 20px
            width: 100%
        content:
        - title: Left Image
          type: image
          layout:
            default:
              width: 270px
            320px:
              align: center
              text-align: center
              width: 270px
          content:
            src: http://www.newsletter2go.de/templates/img/270x150.png
        - title: Left Text
          type: text
          layout:
            default:
              align: left
              padding-bottom: 10px
              padding-top: 20px
              text-align: left
              width: 100%
            320px:
              align: left
              padding-bottom: 0px
              padding-top: 15px
              text-align: left
              width: 100%
          content: Click here to enter your text. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum.
      - title: Right Column
        type: rows
        layout:
          default:
            padding-left: 10px
            padding-right: 10px
            padding-top: 10px
            valign: top
            width: 50%
          320px:
            padding-left: 10px
            padding-right: 10px
            padding-top: 20px
            width: 100%
        content:
        - title: Right Image
          type: image
          layout:
            default:
              width: 270px
            320px:
              align: center
              text-align: center
              width: 270px
          content:
            src: http://www.newsletter2go.de/templates/img/270x150.png
        - title: Right Text
          type: text
          layout:
            default:
              align: left
              padding-bottom: 10px
              padding-top: 20px
              text-align: left
              width: 100%
            320px:
              align: left
              padding-bottom: 0px
              padding-top: 15px
              text-align: left
              width: 100%
          content: Click here to enter your text. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
            et justo duo dolores et ea rebum.
    - title: Imprint
      type: text
      layout:
        default:
          align: center
          padding-bottom: 20px
          padding-top: 20px
          text-align: center
          width: 100%
        320px:
          align: center
          text-align: center
          width: 100%
      content: <span class="nl2go_class_imprint">Legal Notice:<br/>Your name<br/>your
        address<br/>your postal code {{ company.city}}<br/></span><a href="http://example.org"><span class="nl2go_class_imprint">Click here to unsubscribe</span></a>
```

*NML* is  
