- JSON response bei oauth endpunkt unterscheidet sich
- /newsletters/{id}/send sollte fuer transaktionsmails recipient_ids und group_ids akzeptieren

REMOVE
mfa_status
mfa_method
ekomi_done
editor_version            
doubleoptout
uses_postpaid
language (is in user table)
timezone (is in user table)
dateformat (is in user table)
timeformat (is in user table)
datetimeformat (is in user table)
number_format (is in user table)
is_archive_active
is_archive_autoupdate


Setable?
uses_client_testing
default_list_id
agb_accepted_at
register_tld
state

HIDE
register_tld   
is_migrated
ip_class
database
is_whitelisted
version

RENAME: 
credits_abo > credits_subscription
agb_accepted_at > gtc_accepted_at