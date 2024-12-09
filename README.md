# Task Management API
 A RESTful API for managing tasks, built with Node.js, Express.js, and MongoDB. This application supports basic CRUD operations and includes features like filtering, sorting, pagination, and input validation.

## Features
 CRUD Operations: Create, retrieve, update, and delete tasks.
 Filtering & Sorting: Filter tasks by status or priority and sort by creation date or due date.
 Pagination: Efficient handling of large datasets.
 Validation: Input validation using joi.
 Error Handling: Centralized error handling with meaningful responses.
***Prerequisites***
 Before you begin, ensure you have the following installed:

>Node.js (v14 or later)
>npm (Node package manager)
>MongoDB (running locally or via a cloud provider like MongoDB Atlas)

**Setup Instructions**
***Clone the Repository***
```
 git clone https://github.com/your-username/task-management-api.git
 cd task-management-api
```
***Install Dependencies***

```npm install```

***Configure Environment Variables***

Create a .env file in the root directory.
Add the following variables:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/task_management```
Start MongoDB

Ensure MongoDB is running locally or set up a cloud MongoDB database.
Start the Server
```
npx nodemon server.js
The server should start on http://localhost:5000.
```
**API Endpoints**
***1. Create a Task***
Endpoint: POST /tasks
Description: Creates a new task.
Request Body:
```
{
  "title": "Complete the project",
  "description": "Finalize and submit the task management API",
  "priority": "HIGH",
  "dueDate": "2024-12-15"
}
```
Response:
Returns the created task.

***2. Retrieve All Tasks***
Endpoint: GET /tasks
Description: Retrieves all tasks with optional filters, sorting, and pagination.
Query Parameters:

status (e.g., TODO, IN_PROGRESS, COMPLETED)
priority (e.g., LOW, MEDIUM, HIGH)
sort (e.g., createdAt, dueDate)
limit (e.g., 10)
skip (e.g., 0)
***3. Retrieve a Task by ID***
Endpoint: GET /tasks/:id
Description: Fetches a specific task by its ID.
Response:
Returns the task or 404 Not Found if not found.

***4. Update a Task***
Endpoint: PUT /tasks/:id
Description: Updates an existing task by ID.
Request Body: Provide the fields to update (e.g., status, priority).

***5. Delete a Task***
Endpoint: DELETE /tasks/:id
Description: Deletes a task by its ID.
Response:
Returns 204 No Content on successful deletion.

***Testing***
Using Postman
Import the included Postman collection (TaskManagementAPI.postman_collection.json) into Postman.
Use the provided requests to test the API.
Using cURL
Create a Task:

```
curl -X POST http://localhost:5000/tasks -H "Content-Type: application/json" -d '{"title":"Sample Task","priority":"HIGH"}'
```
Retrieve All Tasks:
```
curl -X GET http://localhost:5000/tasks
```
**Development**
***Project Structure***
bash
Copy code
task-management-api/
├── controllers/       # API logic
├── models/            # Database models
├── routes/            # Route definitions
├── middlewares/       # Custom middlewares
├── .env               # Environment variables
├── server.js          # Entry point
└── README.md          # Documentation
**Technologies Used**
Node.js: Backend runtime environment.
Express.js: Web framework for building APIs.
MongoDB: NoSQL database for storing tasks.
Mongoose: ODM for MongoDB.
Joi: Input validation.
dotenv: Environment variable management.
**Future Enhancements**
> Add user authentication.
> Implement soft delete functionality.
> Add unit and integration tests.
**Contributing**
Contributions are welcome! Feel free to submit a pull request.

