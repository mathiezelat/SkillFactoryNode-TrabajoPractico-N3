# Skill Factory Node - Trabajo Práctico 3 - Mathías Ezequiel Latrónico

## Tarea

Continuar con el servidor hecho con express y usando prisma como orm.

## Documentación

### Instalar las dependencias
```sh
npm install
```

### Iniciar en modo desarrollo
```sh
npm run dev
```

### Iniciar en modo producción
```sh
npm start
```

## Peticiones API en local

### CRUD - Create Read Update Delete

`http://localhost:3000/api/v1/users`
```json
{
	"name": "Thor",
	"age": 1500,
	"email": "thor@gmail.com",
	"country": "Asgard"
}
```

`http://localhost:3000/api/v1/posts`
```json
{
	"title": "Hello World",
	"content": "This is a content",
	"authorId": 1
}
```

`http://localhost:3000/api/v1/categories`
```json
{
	"name": "Programming"
}
```