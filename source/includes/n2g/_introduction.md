# Introduction

### JSON first

Our REST API exchanges data in the JSON data format. Every parameter you pass (with a few exceptions e.g. when you upload files) should therefore be formatted in JSON and our API will always return results in JSON as well.

### Very RESTful

Our API follows a very RESTful approach.
Most importantly, we implemented the following four request methods for `CRUD` operations:

| method   | description | 
|----------|-------------|
| `POST`   | Create a new record |
| `GET`    | Retrieve / read records without changing anything |
| `PATCH`  | Update an existing record |
| `DELETE` | Delete one or more records |
