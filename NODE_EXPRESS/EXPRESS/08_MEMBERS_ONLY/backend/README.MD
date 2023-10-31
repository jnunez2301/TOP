# Model and Controllers

### This backend

### Passwords
> Passwords must be encrypted with PassportJS and bcryptjs

#### Must use the MVC where:

> - Models = Schemas
> - Views = ./dist
> - Controllers = express.router()
> - userSchema and Message Schema
> - We have to use bcryptjs to store passwords

#### On gets,post,put,delete we have to:

> - Find ALL messages
> - Find messages by username
> - Update Messages if username === current.username
> - Create message if username exist
> - Delete message if the username === current.username

## Example of Schema

```
    -> UserSchema = {
        user: String,
        password: String(bcryptjs),
        email: String,
        Messages: MessagesSchema
    }

    -> MessagesSchema = {
        username: (ref user schema)
        title: String,
        description: String,
        date: String
    }
```
