# 📝 TODO REST API

## :rocket: Launch
1. Install packages
```
npm install
```
2. Run server with nodemon or node
```
npm run dev
```
```
npm start
```

## 📌 End-points

| Method | End-Point | Description |
| --- | --- | --- |
| `POST` | `/todo` | Create a new *todo* |
| `GET` | `/todo/:id` | Get a specific *todo* |
| `GET` | `/todos` | List all *todos* |
| `PUT` | `/todo` | Edit existing *todo* |
| `DELETE` | `/todo/:id` | Delete existing *todo* |

## Examples
- Create `POST http://localhost:5000/api/todo`
```json
{
	"body": "Make some awesome..."
}
```
Result: 
```json
{
  "_id": "620d00a2ac2329d2222f75fe",
  "body": "Make some awesome...",
  "isCompleted": false,
  "isImportant": false,
  "createdAt": "2022-02-16T13:48:18.438Z",
  "updatedAt": "2022-02-16T13:48:18.438Z",
}
```

- Update `PUT http://localhost:5000/api/todo`
```json
{
	"id": "some mongodb id",
	"isCompleted": true
}
```
