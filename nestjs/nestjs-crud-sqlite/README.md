# NestJS CRUD, TypeORM with SQLite
- reference: [NestJS SQL (TypeORM)](https://docs.nestjs.com/recipes/sql-typeorm)
- reference: [TypeORM Connection Options](https://typeorm.io/#/connection-options)
- reference: [NestJS CRUD generator](https://docs.nestjs.com/recipes/crud-generator)

## Test Environments
- Node.js v16.13.1
- MacOS v12.2.1

## Install
```ssh
$ npm install typeorm --save
$ npm install @nestjs/typeorm --save 
$ npm install better-sqlite3 --save
$ nest g resource users
```

or

```ssh
$ npm install 
```

## Run
```ssh
$ npm run start:dev
```

## Screenshots

Create first user

![create-user](screenshots/01create-user.png)

Create second user

![create-second-user](screenshots/02create-second-user.png)

Read users

![read-users](screenshots/03read-users.png)

Update first user's email

![update-user-1](screenshots/04update-user-1.png)

Read first user

![read-user-1](screenshots/05read-user-1.png)

Update first user's password

![update-user-1](screenshots/06update-user-1.png)

Read first user

![read-user-1](screenshots/07read-user-1.png)

Delete second user

![delete-user-2](screenshots/08delete-user-2.png)

Read users

![read-users](screenshots/09read-users.png)
