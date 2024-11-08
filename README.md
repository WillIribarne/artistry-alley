# Artistry-Alley
Web portfolio and art commerce API developed by Raimundo Monzon and Guillermo Iribarne as a project for UTN-INSPT.
Link to the official postman documentation: https://documenter.getpostman.com/view/39313892/2sAY4ydLKq

Steps to Add Content to the API
1. Define the Schema
- Location: /models
- Action: Create a Mongoose schema for the resource (e.g., User, Product) specifying fields, data types, and validation rules.
2. Create the Model
- Location: /models
- Action: Use mongoose.model to create the model based on the schema. This enables interaction with the database.
3. Build the Service
- Location: /services
- Action: Create a service that encapsulates the data access logic for the model, providing functions for CRUD operations (e.g., createUser, findUser, updateUser, deleteUser). This service abstracts the database operations and isolates them from the business logic.
- Example Functionality: Define methods like create, find, update, and delete, and any additional logic that interacts directly with the model.
4. Write the Controller
- Location: /controllers
- Action: Create a controller to handle business logic for each operation on the model (e.g., calling the appropriate service methods and handling errors). Export each function.
- Functionality: Controllers should not interact directly with the database but should call the methods from the service layer to perform CRUD operations.
5. Add Middleware (if necessary)
- Location: /middleware
- Action: Define middleware if specific functionality is needed, such as authentication (e.g., token validation), data validation, or error handling. This can help in controlling access or ensuring data consistency before reaching the controller.
6. Define Routes
- Location: /routes
- Action: Set up Express routes for the new API endpoints. Map each route to the corresponding controller function, applying any required middleware for specific routes.
7. Integrate Routes in the Server
- Location: server.js (or main server file)
- Action: Mount the routes in the server, using app.use('/api/users', userRoutes); to integrate them into the application.

-- Example Workflow for CRUD Operations --
Schema: Define UserSchema in /models/user.js.
Model: Create User model from the schema in /models/user.js.
Service: Write functions for database operations in /services/userService.js.
Controller: Implement business logic in /controllers/userController.js by calling the service functions.
Middleware: Add middleware if needed (e.g., validateToken for authentication).
Routes: Define routes in /routes/userRoutes.js, applying middleware as required.
Server: Mount routes in server.js with app.use('/api/users', userRoutes);.



To-do list:
1. Vercel.app integration