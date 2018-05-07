# TodoApp

## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Add secret.js to add password for mongoose. Simply add in secret. Password can be asked jouni.mietola@gmail.com for current mlab environment

```
module.exports = "password"
```

Install server and client dependencies

```
yarn
cd client
yarn
```

To start the server and client at the same time (from the root of the project)

```
yarn dev
```

## How this works

Because app is created via `create-react-app` **proxy** needs to be used. _proxy_ is at `client/package.json`

```
"proxy": "http://localhost:5000/"
```

Webpack server proxy our API requests to API server which is running on **localhost:5000**

Swagger Documentation can be seen

```
"proxy": "http://localhost:5000/api-docs/#/default/findtodos"
```



-J.M
