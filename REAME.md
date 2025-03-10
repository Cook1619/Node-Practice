# Node Practice Repository

This repository contains various projects where I practice different aspects of Node.js API development. Each directory serves as a separate project focusing on a particular part of Node.js API development.

## Projects

### server-practice

This project demonstrates a basic Express server setup with TypeScript. It includes:

- Basic CRUD routes for a dashboard application.
- TypeScript configuration and usage.
- Unit tests using Jest and Supertest.

#### File Structure

#### Scripts

- `npm run build`: Compiles the TypeScript code to JavaScript.
- `npm start`: Runs the compiled JavaScript code.
- `npm run dev`: Runs the TypeScript code using `ts-node` for development.
- `npm test`: Runs the unit tests using Jest.

#### Routes

- `GET /dashboard`: Fetches dashboard data.
- `POST /dashboard`: Creates new dashboard data.
- `PUT /dashboard/:id`: Updates existing dashboard data by ID.
- `DELETE /dashboard/:id`: Deletes dashboard data by ID.

## How to Use

1. Clone the repository.
2. Navigate to the desired project directory.
3. Install dependencies using `npm install`.
4. Run the desired script using `npm run <script>`.

Feel free to explore each project and modify the code to practice different aspects of Node.js API development.