# Why use fsvault

## It's a Key/Value Datastore 

At its most basic, this means Get/Put/List/Delete operations at a given key.
Nothing fancier than that. 
But, because fsvault takes data in byte form, **you can store anything**.

*This means simplicity.*

## Automatic encryption.

Turn on encryption by simply having a 32 character key as an environment variable.

*This means security*

## Automatic key rotation

Pre-pend a new 32 character encryption key to the environment variable, and under the hood fsvault re-encrypts your data on the fly.

*This means making security management simple*

## Inherits all the tried and tested foundations of Linux

Because fsvault is just using OS calls, it’s pretty much bug free underneath.

*This means reduced layers of complexity, easier to manage, less bugs*

