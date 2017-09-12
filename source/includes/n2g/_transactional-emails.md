# Transactional Emails

One if not *the most important* purpose of using the Newsletter2Go API is sending transactional emails.  
Over the last couple of years we have optimized this process in order to offer this very powerful feature to single developers as well as professional teams.

<div class="alert alert-info">It is very important to understand the following concept in order for you to take full advantage of our personalization features and our detailed reports when sending transactional emails. <b>So please read carefully</b></div>

> Step 1: Create a transactional mailing (we recommend using our UI for that)

> Step 2: Make sure it's active and copy the `newsletter_id` from the URL  

> Step 3a: Send the mailing to a contact in your list (pass the `recipient_id`)

```shell
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer {{access_token}}" -d '{"contexts":[{"recipient":{"email":"{{recipient_id}}"}}]}' https://api.newsletter2go.com/newsletters/{{newsletter_id}}/send
```

> Step 3b: Or send the mailing to any email address

```shell
curl -X POST -H "Content-Type: application/json" -H "Authorization: Bearer {{access_token}}" -d '{"contexts":[{"recipient":{"id":"{{recipient_email}}"}}]}' https://api.newsletter2go.com/newsletters/{{newsletter_id}}/send
```



First, you will have to create a new mailing. We recommend that you create that mailing through our [UI](https://ui.newsletter2go.com) in order to take full advantage of our powerful newsletter builder. This way, we will automatically create cross-client optimized and responsive `HTML`. Yet another advantage lies in the possibility for other users (e.g. the marketing team) to change the layout or the content of the mailing without having to contact the developer (you).

<div class="alert alert-info">Let the marketing team take care of design and content. All you need is the <code>ID</code> of the transaction mailing. You will never have to change any code.</div>

Of course, it is also possible to create a mailing entirely through the API. When doing so, you can take advantage of our cross-client optimized responsive auto-generated `HTML` by using our `JSON`/`YAML` based [Newsletter2Go Markup Language]().

No matter how you create the mailing, try to create one reusable template. You can customize individual emails by inserting placeholders for personalized fields such as name, products or other information that will be filled through an API call when sending.

By only creating one template, you can take advantage of our full reporting since all emails will be treated part of a *campaign*. When you or a team member changes that template, we will create a new version of the mailing in the background and you will be able to see the difference in performance in the reports. This is particularly useful when you are trying to test and optimize different versions of transactional emails such as a sign up email.

After creating a mailing, you will have access to its `ID`. Use that `ID` to actually send the email in the next step.

When sending an email, you have to pass the newsletter `ID` and information about the recipient. Either pass the recipient `ID` or pass all the recipient's data (including the email-address) as `JSON`.

If you only pass the recipient `ID`, we will use his or her data from your list to personalize the mailing. If you pass full recipient data as `JSON`, we will try to merge the data with existing data from your list.

You can also pass additional data such as product data which is not saved in your list. Just make sure that the placeholders in the source of the mailing correspond to the parameters that you are passing.
This way you can also create for-loops which can be useful if you pass different amounts of data for each recipient (e.g. a purchase confirmation where you want to list all the products that were just bought).