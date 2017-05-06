---
layout: sidebar
title: Your First App
permalink: /getting-started/your-first-app
nav: /getting-started/
prev:
  name: Installation
---

> Steeplejack allows you to write in any language that compiles to JavaScript.
>
> These examples are written for NodeJS v6 - if you are using a different version of NodeJS you will need to compile
> using [Babel](http://babeljs.io/docs/setup/#babel_cli).

Let's create a simple RESTful application using [Restify](http://restify.com). Create a folder in your project called 
`/src` and in it the following files.

### /src/config.json

```json
{
    "server": {
        "name": "steeplejack-example",
        "port": 3000
    }
}
```
