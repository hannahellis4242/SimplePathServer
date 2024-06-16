# SimplePathServer

Basic Expressed Based Path server for hosting a directory

## Config file

The configuration file is bind mounted to `./config` and should contain a `users.json` file that lists the users of the app and their passwords. I know high security around here, but hopefully good enough for lan usage. If changes need to be made to users, such as adding, removing or changing
user password the app must be stopped and restarted before the change will be seen within the app.

## Public files

Public files are bind mounted to `./public` and can be added to even while the app is running.
