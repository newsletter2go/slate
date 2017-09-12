## Company

> `GET` `https://api.newsletter2go.com/companies`

<button class='btn btn-primary' onClick="Api.companies.get(this);"><span class="icon-control-play"></span> Play</button>

```json--payload
{
    "payload": false
}
```

```json--response
{
   "info":{
      "count":0
   },
   "value":[
      {
         "id":"string",
         "name":"string",
         "address":"string",
         "city":"string",
         "postcode":"string",
         "country":"string",
         "bill_name":"string",
         "bill_first_name":"string",
         "bill_last_name":"string",
         "bill_address":"string",
         "bill_city":"string",
         "bill_postcode":"string",
         "bill_country":"string",
         "default_list_id":"string",
         "state":"verified",
         "credits_email":0,
         "credits_freemail":0,
         "credits_abo":0
      }
   ]
}
```