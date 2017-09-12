# Core Concepts

Welcome and thanks for using Newsletter2Go.  


**Make this document interactive by inputting your API credentials here:**

<input id="auth_key" type="text" class="form-control inline" placeholder="AUTH KEY">
<input id="username" type="text" class="form-control inline" placeholder="USER NAME">
<input id="password" type="password" class="form-control inline" placeholder="PASSWORD">
<button id="authenticate" class="btn btn-primary">Authenticate</button>

Visit [https://ui.newsletter2go.com/api-client](https://ui.newsletter2go.com/api-client) if you already have an account but don't know your credentials yet.

Or visit [https://ui.newsletter2go.com/api-client](https://ui.newsletter2go.com/register) to create a new account.

## JSON first

Our REST API exchanges data in the `JSON` data format. Every parameter / payload you pass (with very little exceptions e.g. when you upload files) should therefore be formatted in `JSON` and our API will always return results in `JSON` as well.  
Even though we expect that you to send `JSON` payloads, please make sure to use `Content-Type: application/json` in your header when [making calls](#making-api-calls).

## RESTful Principles

Our API follows a very RESTful approach.
Most importantly, we support the four standard request methods for `CRUD` operations:

| method   | description | 
|----------|-------------|
| `POST`   | Create a new record |
| `GET`    | Retrieve / read records without changing anything |
| `PATCH`  | Update an existing record |
| `DELETE` | Delete one or more records |

## HTTP Status codes


We follow the most common HTTP status codes when outputting the API response:

### Successful requests `2xx`

| response code | description |
|---------------|-------------|
| `200`         | `OK` Successful request |
| `201`         | `Created` New resource has been created |

### Client errors `4xx`

| response code | description |
|---------------|-------------|
| `400`         | `Bad Request` Inspect the body for detailed information about what went wrong. The most common error is "code":1062, which means, that a unique constraint was hit. For example if the name of the group is already in use. |
| `401`         | `Unauthorized` Invalid access_token. Check if the access_token has expired or is incorrect. |
| `403`         | `Forbidden` Access to this resource is denied for this user |
| `404`         | `Not Found` Resource / endpoint is not available |

### Server error `5xx`

If you receive a HTTP status code which starts with 5 there's something wrong on our side. Sorry :)
Please contact [our support](mailto:support@newsletter2go.com) and we'll try to fix it asap. 

## Response format

```json
{
   "info":{
      "count":1
   },
   "value":[
      {
         "{{key}}":"{{value}}"
      },
      ...
   ]
}
```

The API always returns a `JSON` object with the properties `info` and `value`:

| property | description |
|----------|-------------|
| `info`   | Contains the number of results `count` and additional information depending on the resource |
| `value`  | Contains an array of result objects that each can have different keys and values depending on the resource | 

## Common `GET` parameters

```shell
curl -X GET -H "Authorization: Bearer {{access_token}}" "https://api.newsletter2go.com/lists/{{list_id}}/recipients?_expand=false&_fields=email,first_name,last_name&_filter=email%3DLIKE%3D%22%25yahoo%25%22&_limit=10&_offset=0"
```

The following parameters are all optional and can be used in every `GET` call in order to filter or limit the result sets.

| parameter | description |
|-----------|-------------|
| `_filter` | A [complex filter](#filter) for filtering the result set based on [FIQL](https://tools.ietf.org/html/draft-nottingham-atompub-fiql-00) |
| `_limit`  | The maximum number records returned |
| `_offset` | Pagination for the result-set |
| `_expand` | Submit true to get all default fields of the resource |
| `_fields` | A comma-separated list of case-sensitive field names to get the values of these fields in the response |

## Filter language

The filter language for filtering results is based on [FIQL](https://tools.ietf.org/html/draft-nottingham-atompub-fiql-00).  
<div class="alert alert-info">Comparison values have to be "enquoted", e.g. `first_name=="Max"`.  
Otherwise they will be interpreted as attributes themselves, e.g. `first_name==last_name`</div>

```shell
curl -X GET -H "Authorization: Bearer {{access_token}}" "https://api.newsletter2go.com/lists/{{list_id}}/recipients?_filter=email%3DLIKE%3D%22%25yahoo%25%22"
```

<div class="alert alert-info">Make sure to <code>urlencode</code> the <code>_filter</code> parameter values when making a request</div>

The following operators are supported:

| operator | description | example |
|----------|-------------|---------|
| `==`     | equals | `age=="27"` |
| `=ne=`   | does not equal | `gender=ne="m"` |
| `=gt=`   | greater than | `last_name=gt="g"` |
| `=ge=`   | greater than or equal to | `rating=ge="2"` |
| `=lt=`   | less than | `statistic_mails_clicked=lt="5"` |
| `=le=`   | less than or equal to | `DATE_FORMAT(created_at,"Y-m-d")=le="2017-09-06"` |
| `=like=` | like - use `%` as wildcard | `email=like=%yahoo.com` |
| `=nlike=`| not like - use `%` as wildcard | `phone=nlike=""` |
| `=contains=`| *array* contains *an element* | `group_ids=contains="rarr38sz"` |
| `=ncontains=`| *array* does not contain *an element* | `group_ids=ncontains="rarr38sz"` |
| `=in=`| *an element* is in *an array* | `"rarr38sz"=in=group_ids` |
| `=nin=`| *an element* is not in *an array* | `"rarr38sz"=nin=group_ids` |
| `;`      | logical "and" - connect multiple filters | `birthday=ge="1979-12-31";gender=="f"` |
| `,`      | logical "or" - connect multiple filters | `(group_ids=contains="rarr38sz",group_ids=CONTAINS="5cj9y8ub")` |

## Making API Calls

> Step 1: Authenticate and acquire an access token

```shell
curl -X POST -u {{auth_key}} -H "Content-Type: application/json" -d '{"username": "{{username}}", "password": "{{password}}", "grant_type": "https://nl2go.com/jwt"}' https://api.newsletter2go.com/oauth/v2/token
```

> Step 2: Store the `access_token` from the response

```json
{
   "access_token":"{{access_token}}",
   "expires_in":7200,
   "token_type":"bearer",
   "scope":null,
   "refresh_token":"{{refresh_token}}",
   "account_id":"{{account_id}}",
   "type":"user"
}
```

> Step 3: Pass the `access_token` in the `Authorization` header in each request

```shell
curl -H "Authorization: Bearer {{access_token}}" -H "Content-Type: application/json" https://api.newsletter2go.com/companies
```

You will need your `user name`, your `password` and your `auth key` which you can find in [your account](https://ui.newsletter2go.com/api-client).

<div class="alert alert-info">We recommend to create a dedicated API user before you get started. This way, you can better manage permissions and do not have to worry about password changes.</div>
The Newsletter2Go API uses [OAuth 2.0 bearer tokens](https://tools.ietf.org/html/rfc6750) to authenticate your requests.

That means, that you will have to acquire a valid access token first by making a `POST` call to our `/oauth/v2/token` endpoint. [More information on the authentication endpoint.](#authentication)
 
If the authentication was successful, you will receive an `access_token` in the `JSON` response. It expires automatically after 2 hours ([you can use the `refresh_token` to renew your session](#authentication)).

Store the `access_token` in a safe place and add it in each consecutive request in the `Authorization` header.  

