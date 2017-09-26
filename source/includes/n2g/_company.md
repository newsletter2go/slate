## Company

### `GET` company details

> `GET` `https://api.newsletter2go.com/companies` 

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

<button class='btn btn-primary' onClick="Api.makeCall(this, 'GET', '/companies');"><span class="icon-control-play"></span> Play</button>

#### Response Parameters

| Parameter | Type      | Description |
|-----------|-----------|-----------|
| `id` | `string`<br><span class="label label-default">8-digit alphanumeric</span> | The `id` of your company account (`{{company.id}}`) |
| `modified_at` | `date`<br><span class="label label-default">ISO-8601 format</span> | Last date the company data was modified |
| `created_at` | `date`<br><span class="label label-default">ISO-8601 format</span> | The date your company account was created |
| `phone` | `string` | The company phone number |
| `agb_accepted_at` | `date`<br><span class="label label-default">ISO-8601 format</span> | The date your company accepted the general terms and conditions |
| `name` | `string` | The company name |
| `address` | `string` | The company address |
| `city` | `string` | The company city |
| `postcode` | `string` | The company postcode |
| `country` | `string`<br><span class="label label-default">ISO 3166-1 alpha-2 format</span> | 2-digit country code of your company |
| `bill_name` | `string` | The company name on your invoices |
| `bill_first_name` | `string` | The first name on your invoices |
| `bill_last_name` | `string` | The last name on your invoices |
| `bill_gender` | `enum`<br><span class="label label-default">m, f</span> | Gender of the person on your invoice |
| `bill_address` | `string` | The company address on your invoices |
| `bill_city` | `string` | The company city on your invoices |
| `bill_postcode` | `string` | The company postcode on your invoices |
| `bill_country` | `string`<br><span class="label label-default">ISO 3166-1 alpha-2 format</span> | The company country on your invoices |
| `bill_email` | `string`<br><span class="label label-default">RFC822 compliant email address</span> | The email address invoices will be sent to |
| `default_list_id` | `string`<br><span class="label label-default">8-digit alphanumeric</span> | The `id` of your default list |
| `credits_email` | `number`<br><span class="label label-default">non-negative integer</span> | The amount of prepaid emails in your account |
| `credits_freemail` | `number`<br><span class="label label-default">non-negative integer</span> | The amount of free emails in your account |
| `credits_abo` | `number`<br><span class="label label-default">non-negative integer</span> | The amount of subscription emails in your account |
| `state` | `enum`<br><span class="label label-default">verified, pending, declined</span> | Whether your account has been verified for sending |
| `uses_client_testing` | `boolean` | Whether the client testing is active |
| `uses_payback` | `boolean` | Whether the credit payback feature is active |
| `industry_id` | "fyc983tf" | |
| `frequency` | `enum`<br><span class="label label-default">daily, weekly, monthly, quartely, sporadic</span> | The dispatch frequency of the company |
| `num_recipients` | `enum`<br><span class="label label-default"><1000, 1000_5000, 5000_10000, 10000_25000, 25000_50000, >50000</span>  | The number of recipients of the company |
| `is_opentracking_allowed` | `boolean` | Whether open tracking is allowed |
| `is_clicktracking_allowed` | `boolean` | Whether click / link tracking is allowed |
| `is_recipienttracking_allowed` | `boolean` | Whether recipient based tracking is allowed |
| `allow_support_access` | `boolean` | Whether the customer support may access your account |



### `PATCH` company details

#### Request Parameters

| Parameter | Type      | Description |
|-----------|-----------|-----------|
| `id`<br><span class="label label-default">required</span> | `string`<br><span class="label label-default">8-digit alphanumeric</span> | The `id` of your company account (`{{company.id}}`) |