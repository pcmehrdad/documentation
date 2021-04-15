---
title: Requests Monitor
---

- [Enable requests logging](#enable-requests-logging)
- [Usage](#usage)
- [Result](#result)
- [Change the default log file](#change-the-default-log-file)

Apiato provides a simple and easy way to monitor and log all the HTTP requests coming to your application.

The request monitor can be very useful when testing and debugging your frontend Apps which consume your API. Especially when the frontend apps (Mobile, Web,...) are built by other developers who are far from you.

The requests monitor is provided by the Debugger Container, by a `RequestsMonitorMiddleware` middleware.

:::danger ATTENTION

This container is a `VendorContainer` and is installed with apiato by default,
to modify its code you need to read [the instructions](#change-the-default-log-file) first.

:::

## Enable requests logging {#enable-requests-logging}

From the `.env` file set `REQUESTS_DEBUG` to true.

Now in order for this to start displaying the results you need to enable the debugging mode in Laravel by setting `APP_DEBUG` to true in the `.env` as well.

## Usage {#usage}

Simply tail the log file

```shell

tail -f storage/logs/debugger.log

```

## Result {#result}

Screenshot example:

![](https://files.readme.io/25bf091-requests-debugger.png)

## Change the default log file {#change-the-default-log-file}

:::caution Instructions

This container works out of the box perfectly but if you want to change its configs or modify the codes you MUST follow these steps first:

1- Copy the container from `VendorSection` to `AppSection` (or any of your custom sections) of your project<br/>
2- Fix any broken namespaces<br/>

:::

By default, everything is logged in the `debugger.log` file, to change the default file go to `Debugger/Configs/debugger.php` config file and set the file name:

```php
/*

 |--------------------------------------------------------------------------
 | Log File
 |--------------------------------------------------------------------------
 |
 | What to name the log file in the `storage/log` path.
 |
 */

'log_file' => 'debugger.log',

```

This feature is provided by the `Debugger` Container via its `RequestsMonitorMiddleware` middleware.

To see the results go ahead and Tail the default Laravel debug file `tail -f storage/logs/laravel.log`.

Note: this will also not run in Testing environments, to enable it you need to manually edit the Middleware.