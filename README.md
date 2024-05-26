# API Documentation

## Authentication

### Login
- **Endpoint:** `POST /login`
- **Description:** Logs in the user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password"
  }
  ```
- **Response:**
  ```json
  {
    "token": "JWT_TOKEN"
  }
  ```

### Register
- **Endpoint:** `POST /register`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password"
  }
  ```

## Customers

### Fetch All Customers
- **Endpoint:** `GET /customers`
- **Description:** Fetches all customers.
- **Response:**
  ```json
  [
    {
      "id": "CUSTOMER_ID",
      "name": "John Doe",
      "email": "john@example.com",
      // Other customer fields
    },
    {
      "id": "ANOTHER_CUSTOMER_ID",
      "name": "Jane Doe",
      "email": "jane@example.com",
      // Other customer fields
    }
  ]
  ```

### Fetch Customer by ID
- **Endpoint:** `GET /customers/:customerId`
- **Description:** Fetches a customer by ID.
- **Parameters:**
  - `customerId`: ID of the customer to fetch.
- **Response:**
  ```json
  {
    "id": "CUSTOMER_ID",
    "name": "John Doe",
    "email": "john@example.com",
    // Other customer fields
  }
  ```

### Create Customer
- **Endpoint:** `POST /customers`
- **Description:** Creates a new customer.
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    // Other customer fields
  }
  ```
- **Response:**
  ```json
  {
    "id": "NEW_CUSTOMER_ID",
    "name": "John Doe",
    "email": "john@example.com",
    // Other customer fields
  }
  ```

### Update Customer
- **Endpoint:** `PUT /customers/:customerId`
- **Description:** Updates a customer by ID.
- **Parameters:**
  - `customerId`: ID of the customer to update.
- **Request Body:**
  ```json
  {
    "name": "Updated Name",
    // Other fields to update
  }
  ```

### Delete Customer
- **Endpoint:** `DELETE /customers/:customerId`
- **Description:** Deletes a customer by ID.
- **Parameters:**
  - `customerId`: ID of the customer to delete.

## Subscriptions

### Fetch All Subscriptions
- **Endpoint:** `GET /subscriptions`
- **Description:** Fetches all subscriptions.
- **Response:**
  ```json
  [
    {
      "id": "SUBSCRIPTION_ID",
      "customerId": "CUSTOMER_ID",
      "productName": "Premium Plan",
      "startDate": "2024-05-01",
      "endDate": "2024-05-31",
      "status": "active"
    },
    {
      "id": "ANOTHER_SUBSCRIPTION_ID",
      "customerId": "ANOTHER_CUSTOMER_ID",
      "productName": "Basic Plan",
      "startDate": "2024-04-15",
      "endDate": "2024-05-14",
      "status": "cancelled"
    }
  ]
  ```

### Fetch Subscription by ID
- **Endpoint:** `GET /subscriptions/:subscriptionId`
- **Description:** Fetches a subscription by ID.
- **Parameters:**
  - `subscriptionId`: ID of the subscription to fetch.
- **Response:**
  ```json
  {
    "id": "SUBSCRIPTION_ID",
    "customerId": "CUSTOMER_ID",
    "productName": "Premium Plan",
    "startDate": "2024-05-01",
    "endDate": "2024-05-31",
    "status": "active"
  }
  ```

### Create Subscription
- **Endpoint:** `POST /subscriptions`
- **Description:** Creates a new subscription.
- **Request Body:**
  ```json
  {
    "customerId": "CUSTOMER_ID",
    "productName": "Premium Plan",
    "startDate": "2024-05-01",
    "endDate": "2024-05-31",
    "status": "active"
  }
  ```
- **Response:**
  ```json
  {
    "id": "NEW_SUBSCRIPTION_ID",
    "customerId": "CUSTOMER_ID",
    "productName": "Premium Plan",
    "startDate": "2024-05-01",
    "endDate": "2024-05-31",
    "status": "active"
  }
  ```

### Update Subscription
- **Endpoint:** `PUT /subscriptions/:subscriptionId`
- **Description:** Updates a subscription by ID.
- **Parameters:**
  - `subscriptionId`: ID of the subscription to update.
- **Request Body:**
  ```json
  {
    "endDate": "2024-06-30",
    "status": "paused"
  }
  ```

### Delete Subscription
- **Endpoint:** `DELETE /subscriptions/:subscriptionId`
- **Description:** Deletes a subscription by ID.
- **Parameters:**
  - `subscriptionId`: ID of the subscription to delete.

