# 📝 TODO REST API

## :rocket: Launch
1. Install packages
```
npm install
```
2. Create `.env` file with URI for connection to MongoDB
```
MONGODB_URI=mongodb://mongodb0.example.com:27017
```
3. Run server with nodemon or node
```
npm run dev
```
```
npm start
```
> Base url http://localhost:5000/ 

## 📌 End-points

| Method | End-Point | Description |
| --- | --- | --- |
| `POST` | `/api/todo` | Create a new *todo* |
| `GET` | `/api/todo/:id` | Get a specific *todo* |
| `GET` | `/api/todos` | List all *todos* |
| `PUT` | `/api/todo` | Edit existing *todo* |
| `DELETE` | `/api/todo/:id` | Delete existing *todo* |

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
