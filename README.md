<h2>URL: https://shopping-cart-api.maicolduque.now.sh</h2>

Carrito de compras con NodeJS / Express / MongoDB

## Instalar y ejecutar

```bash
# Install
$ npm install

# Run
npm run dev
```

## Uso

El proyecto expone tres endpoint basicos:

- `/api/helloworld` Para testear que nuestro proyecto esta funcionando
- `/api/users`
- `/api/products`

### Ejemplo basico **Crear USUARIO** `/api/users`:

Request Body:
```json
{
  "name": "Maicol Duque",
  "email": "maicolduque01@gmail.com",
  "password": "my-secret-password",
  "role": "user"
}
```

Response:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWFiNzkyMWQ1Yzk3NjJlZGQzZmUwZDgiLCJpYXQiOjE1MDQ0MDk4ODksImV4cCI6MTUwNDQyNzg4OX0.2gZPXZ-dQc3kQ1fcIDryHm4gIqWLvcw6guAOnP0ueGU"
}
```


## Estructura del proyecto
```
backend-js-shopping
├── api
│    ├── helloWorld
│    │    ├── helloWorld.controller.js
│    │    └── index.js
│    ├── product
│    │    ├── product.controller.js
│    │    ├── product.model.js
│    │    └── index.js
│    └── user
│         ├── user.controller.js
│         ├── user.model.js
│         └── index.js
├── auth
│    ├── facebook
│    ├── google
│    ├── local
│    │    ├── passport.js
│    │    └── index.js
│    ├── auth.service.js
│    └── index.js
├── config
│    ├── environment
│    │    ├── development.js
│    │    ├── production.js
│    │    ├── shared.js
│    │    └── index.js
│    ├── express.js
│    └── local.env.js
├── app.js
├── routes.js
└── index.js
```
