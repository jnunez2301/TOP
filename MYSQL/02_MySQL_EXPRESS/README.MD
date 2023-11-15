# NODE, EXPRES  y MySQL

A simple API REST to practice MySQL on MERN enviroment.

[Build a REST API with Node.js, Express and MySQL](https://blog.logrocket.com/build-rest-api-node-express-mysql/)


## Why mysql2 and not mysql?

The mysql2 package is often preferred over the mysql package for a few reasons. First off, it's known for being faster due to its implementation that supports MySQL's non-blocking, asynchronous connections. This can be beneficial in applications with a lot of concurrent database queries.

Moreover, mysql2 has better support for Promises, making it more compatible with modern JavaScript, especially if you're using async/await. The additional support for prepared statements and multiple statements in a single query can also be handy.

If you're working on a project with a focus on performance and modern JavaScript features, mysql2 might be the way to go. However, if you're comfortable with the mysql package and it meets your needs, sticking with it is perfectly fine. It often comes down to personal preference and project requirements. Anything else you want to know about it?
