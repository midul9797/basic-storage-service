#Basic Data Storage Service

## Explanation Video:

https://drive.google.com/file/d/1uea1MB2D8J8lyGyiItUnDr70PsvKLdOo/view?usp=sharing

## Prerequisites

- Node.js (version 20 or later)
- npm or yarn
- Redis(Port: 6379)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/midul9797/basic-storage-service.git
cd basic-storage-service
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

1. Rename `envfile.example` to `.env`
2. It contains the required environment variables

### 4. Start Server

```bash
npm start
# or
yarn start

# Project Structure

---

## Root Files

- **.env**: Environment variables configuration.
- **.eslintignore**: Specifies files and directories ignored by ESLint.
- **.eslintrc**: ESLint configuration file for linting rules.
- **.gitignore**: Specifies files and directories ignored by Git.
- **.node-version**: Specifies the Node.js version for the project.
- **.prettierrc**: Prettier configuration file for code formatting.
- **.structignore**: Specifies files and directories ignored by Struct.
- **package-lock.json**: Auto-generated dependency tree lockfile.
- **package.json**: Specifies project dependencies, scripts, and metadata.
- **README.md**: Documentation for the project.
- **tsconfig.json**: TypeScript configuration file.

---

## Folder Structure

### **prisma/**

- **schema.prisma**: Defines the database schema, models, and relationships for Prisma ORM.

---

### **src/**

#### **app/**

- **controllers/**

  - **booking.controller.ts**: Handles all booking-related logic.
  - **document.metadata.controller.ts**: Manages document metadata operations.
  - **system.configuration.controller.ts**: Handles system configuration processes.
  - **user.controller.ts**: Manages user-related operations.

- **middlewares/**

  - **auth.ts**: Middleware for authenticating requests.
  - **globalErrorHandler.ts**: Centralized error handling middleware.
  - **validateRequest.ts**: Middleware for validating incoming requests.

- **routes/**

  - **booking.route.ts**: Defines booking-related API endpoints.
  - **document.metadata.route.ts**: Routes for document metadata operations.
  - **index.ts**: Main router that combines all routes.
  - **system.configuration.route.ts**: API routes for system configuration.
  - **user.route.ts**: User-related API routes.

- **services/**

  - **booking.service.ts**: Contains the business logic for bookings.
  - **document.metadata.service.ts**: Handles document metadata-related business logic.
  - **system.configuration.service.ts**: Manages system configuration logic.
  - **user.service.ts**: User management business logic.

- **validations/**
  - **booking.validation.ts**: Validation schemas for booking data.
  - **document.metadata.validation.ts**: Validation for document metadata operations.
  - **system.configuration.validation.ts**: Validation schemas for system configuration.
  - **user.validation.ts**: Validation for user-related data.

---

#### **config/**

- **index.ts**: Configuration file for environment variables and app settings.

---

#### **constants/**

- Folder to store application-wide constants (empty or as required).

---

#### **enums/**

- Folder for enumerations used throughout the app (empty or as required).

---

#### **errors/**

- **ApiError.ts**: Custom error class for API-specific errors.
- **handleClientError.ts**: Handles client-side errors.
- **handleValidationError.ts**: Manages validation error responses.
- **handleZodError.ts**: Processes errors from Zod validation schemas.

---

#### **helpers/**

- **jwtHelpers.ts**: Utilities for working with JSON Web Tokens (JWT).

---

#### **interfaces/**

- **common.ts**: Shared TypeScript interfaces for common types.
- **error.ts**: Interfaces for error handling.
- **index.d.ts**: Global TypeScript type declarations.

---

#### **shared/**

- **asyncForEach.ts**: Helper for asynchronous iteration.
- **catchAsync.ts**: Utility for handling asynchronous function errors.
- **redis.ts**: Redis utility for caching and other operations.
- **sendResponse.ts**: Utility for standardizing API responses.

---

#### Other Files

- **app.ts**: Main app configuration and middleware setup.
- **server.ts**: Entry point to start the server.

# Basic Storage API Documentation

This API provides endpoints to manage document metadata, users, bookings, and system configurations.

## Contact Support

- **Email:** [moklasurrahman9797@gmail.com](mailto:moklasurrahman9797@gmail.com)

---

## Base URL

```

{{baseUrl}} = http://localhost:<PORT>/api/v1

````

Replace `PORT` with backend port number.

---

## Endpoints

---

### 1. **Document Metadata**

#### Retrieve All Document Metadata

- **Method:** `GET`
- **URL:** `/document-metadata`
- **Description:** Retrieve all document metadata records.
- **Headers:**
  - `Accept: application/json`

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata retrived successfully",
  "data": [
    {
      "id": "e9f3de27-688e-4864-823a-9640b0abb7c3",
      "title": "Shohojogi SRS (221012412).pdf",
      "version": 0,
      "lastModified": "2024-12-01T20:43:13.454Z",
      "fileId": "674cca5ffd6aa09f56c7e0ac",
      "author": {
        "name": "Moklasur Rahman",
        "email": "moklasurrahman9797@gmail.com"
      },
      "BookingRecord": {
        "id": "7ded0b6f-90b7-4a76-91dd-e68ae6148c3e",
        "title": "Party ",
        "description": "I have to go to a party. Need a babysitter",
        "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
        "bookingDate": "December 10th, 2024 19:41",
        "createdAt": "2024-12-01T20:43:10.300Z",
        "updatedAt": "2024-12-01T20:43:10.300Z"
      }
    },
    {
      "id": "d3c26641-ab32-49eb-b4e2-215f7e3ca7a7",
      "title": "+.pdf",
      "version": 0,
      "lastModified": "2024-12-01T20:52:37.428Z",
      "fileId": "674ccc95fd6aa09f56c7e0b0",
      "author": {
        "name": "Moklasur Rahman",
        "email": "moklasurrahman9797@gmail.com"
      },
      "BookingRecord": {
        "id": "6b3dc10f-6e60-4185-9370-664d9f2f48d3",
        "title": "asdf",
        "description": "asdf",
        "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
        "bookingDate": "December 18th, 2024 02:57",
        "createdAt": "2024-12-01T20:52:35.219Z",
        "updatedAt": "2024-12-01T20:52:35.219Z"
      }
    }
  ]
}
````

---

#### Create a New Document Metadata

- **Method:** `POST`
- **URL:** `/document-metadata`
- **Description:** Add a new document metadata record.
- **Headers:**
  - `Content-Type: application/json`

**Body Example:**

```json
{
  "bookingId": "a61e19a4-99e6-408c-a722-a46a8c8b5b14",
  "title": "Testing",
  "version": 0,
  "fileId": "674f1052a30eb739be0b5651"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata created successfully",
  "data": {
    "title": "Testing",
    "version": 0,
    "lastModified": "2024-12-03T18:04:10.057Z",
    "author": {
      "name": "MR midul",
      "email": "moklasurrahman9797@gmail.com"
    }
  }
}
```

---

#### Retrieve Document Metadata by ID

- **Method:** `GET`
- **URL:** `/document-metadata/{{documentId}}`
- **Description:** Fetch a specific document's metadata by its ID.
- **Headers:**
  - `Accept: application/json`

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata retrived successfully",
  "data": {
    "id": "e23d99eb-0561-4366-bbad-c4600481aced",
    "title": "Shohojogi SRS (221012412).pdf",
    "authorId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "lastModified": "2024-12-01T21:06:51.795Z",
    "version": 0,
    "fileId": "674ccfeafd6aa09f56c7e0b4",
    "bookingId": "a627aa5c-862f-4f52-8470-d211b840ab1a"
  }
}
```

---

#### Update Document Metadata

- **Method:** `PATCH`
- **URL:** `/document-metadata/{{documentId}}`
- **Description:** Update a document's metadata.
- **Headers:**
  - `Content-Type: application/json`

**Body Example:**

```json
{
  "title": "Title Changed"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "DocumentMetadata updated successfully",
  "data": true
}
```

---

#### Delete Document Metadata

- **Method:** `DELETE`
- **URL:** `/document-metadata/{{documentId}}`
- **Description:** Remove a document's metadata record.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata deleted successfully",
  "data": true
}
```

---

#### Retrieve Document Metadata by File ID

- **Method:** `GET`
- **URL:** `/document-metadata/file/{{fileId}}`
- **Description:** Fetch document metadata using a file's ID.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata retrived successfully",
  "data": {
    "id": "3b01f774-43bc-4bf5-bcf4-a355324199d3",
    "title": "Moklasur_Rahman_FulStack.pdf",
    "authorId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "lastModified": "2024-11-30T21:05:45.666Z",
    "version": 0,
    "fileId": "674b7e29758167dd6985b050",
    "bookingId": "3fc50271-235f-4a63-9023-2b87e496e6c3"
  }
}
```

---

#### Retrieve Document Metadata from Cache

- **Method:** `GET`
- **URL:** `/document-metadata/cache`
- **Description:** Retrieve cached document metadata for improved performance.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Documents Metadata Cache retrived successfully",
  "data": [
    {
      "id": "5b891ca8-c501-4ec2-8827-779e4788cd5d",
      "title": "Testing",
      "version": 0,
      "lastModified": "2024-12-03T18:04:10.057Z",
      "fileId": "674f1052a30eb739be0b5651",
      "author": {
        "name": "MR midul",
        "email": "moklasurrahman9797@gmail.com"
      },
      "BookingRecord": {
        "id": "a61e19a4-99e6-408c-a722-a46a8c8b5b14",
        "title": "Hello",
        "description": "test",
        "userId": "user_2pLMsgwdPWvMljf2XkxuqQMHoWN",
        "bookingDate": "December 5th, 2024 08:20",
        "createdAt": "2024-12-01T10:17:40.329Z",
        "updatedAt": "2024-12-01T10:17:40.329Z"
      }
    },

    {
      "id": "d826c870-2f5d-4233-a0d2-1ca2d5932fb5",
      "title": "emotion-detection_2024.pdf",
      "version": 0,
      "lastModified": "2024-12-03T10:08:04.071Z",
      "fileId": "674ed880803a6cff7a620a53",
      "author": {
        "name": "MR midul",
        "email": "moklasurrahman9797@gmail.com"
      },
      "BookingRecord": {
        "id": "dc30691c-e993-42bc-9bb2-fd6c8142136d",
        "title": "Hello",
        "description": "something",
        "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
        "bookingDate": "December 4th, 2024 06:08",
        "createdAt": "2024-12-03T10:08:00.045Z",
        "updatedAt": "2024-12-03T10:08:00.045Z"
      }
    }
  ]
}
```

---

### 2. **User Management**

#### Retrieve Authenticated User Details

- **Method:** `GET`
- **URL:** `/user`
- **Description:** Fetch the details of the currently authenticated user.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User retrived successfully",
  "data": {
    "name": "MR midul",
    "email": "moklasurrahman9797@gmail.com",
    "phone": "+880189166",
    "address": "Halishahar",
    "country": "Japan",
    "profileImage": ""
  }
}
```

---

#### Retrieve User by Email

- **Method:** `GET`
- **URL:** `/user/{{email}}`
- **Description:** Fetch a user's details by their email.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User retrived successfully",
  "data": {
    "id": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "clerkId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "name": "MR midul",
    "email": "moklasurrahman9797@gmail.com",
    "phone": "+880189166",
    "country": "Japan",
    "address": "updated address",
    "profileImage": ""
  }
}
```

---

#### Create a New User

- **Method:** `POST`
- **URL:** `/user`
- **Description:** Create a new user.
- **Headers:**
  - `Content-Type: application/json`

**Body Example:**

```json
{
  "id": "12345",
  "clerkId": "12345",
  "name": "MR Midul",
  "email": "test@testing.com",
  "phone": "111111111",
  "country": "BD",
  "address": "CTG",
  "profileImage": "base64 binary string"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "12345",
    "clerkId": "12345",
    "name": "MR Midul",
    "email": "test@testing.com",
    "phone": "111111111",
    "country": "BD",
    "address": "CTG",
    "profileImage": "base64 binary string"
  }
}
```

---

#### Update User Details

- **Method:** `PATCH`
- **URL:** `/user`
- **Description:** Update the currently authenticated user's details.
- **Headers:**
  - `Content-Type: application/json`

**Body Example:**

```json
{
  "name": "Updated Name",
  "address": "123 Updated St"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User updated successfully",
  "data": true
}
```

---

### 3. **Bookings**

#### Retrieve All Bookings

- **Method:** `GET`
- **URL:** `/booking`
- **Description:** Retrieve all bookings.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Booking Records retrived successfully",
  "data": [
    {
      "id": "dc30691c-e993-42bc-9bb2-fd6c8142136d",
      "title": "Hello",
      "description": "something",
      "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
      "bookingDate": "December 4th, 2024 06:08",
      "createdAt": "2024-12-03T10:08:00.045Z",
      "updatedAt": "2024-12-03T10:08:00.045Z"
    },
    {
      "id": "a627aa5c-862f-4f52-8470-d211b840ab1a",
      "title": "asdfa",
      "description": "adfadf",
      "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
      "bookingDate": "December 28th, 2024 18:08",
      "createdAt": "2024-12-01T21:06:50.011Z",
      "updatedAt": "2024-12-01T21:06:50.011Z"
    }
  ]
}
```

---

#### Create a New Booking

- **Method:** `POST`
- **URL:** `/booking`
- **Description:** Create a new booking record.
- **Headers:**
  - `Content-Type: application/json`

**Body Example:**

```json
{
  "title": "Testing",
  "description": "nothing",
  "bookingDate": "10th November, 2024 10:20"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Booking Record created successfully",
  "data": {
    "id": "913bcc1b-0946-46aa-b283-ef8a9d83c2f5",
    "title": "Testing",
    "description": "nothing",
    "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "bookingDate": "10th November, 2024 10:20",
    "createdAt": "2024-12-03T18:07:18.042Z",
    "updatedAt": "2024-12-03T18:07:18.042Z"
  }
}
```

---

#### Retrieve Booking by ID

- **Method:** `GET`
- **URL:** `/booking/{{bookingId}}`
- **Description:** Fetch a booking record by its ID.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Booking Record retrived successfully",
  "data": {
    "id": "38af00a4-5107-4366-a6a0-41796a505455",
    "title": "Pulikidz",
    "description": "something",
    "userId": "user_2pLMsgwdPWvMljf2XkxuqQMHoWN",
    "bookingDate": "December 7th, 2024 06:33",
    "createdAt": "2024-12-03T10:32:07.600Z",
    "updatedAt": "2024-12-03T10:32:07.600Z"
  }
}
```

---

### **4. System Configuration**

#### Create System Configuration

- **Method:** `POST`
- **URL:** `/system-configuration`
- **Description:** Add a new system configuration.
- **Headers:**
  - `Content-Type: application/json`

**Body Example:**

```json
{
  "key": "darkMode",
  "value": "off"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "System Configuration created successfully",
  "data": {
    "id": "09cf15c3-40ff-4d19-93ac-b1c0f56a863f",
    "key": "darkMode",
    "value": "off",
    "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "updatedAt": "2024-12-03T18:39:14.926Z",
    "createdAt": "2024-12-03T18:39:14.926Z",
    "description": null
  }
}
```

---

#### Retrieve System Configurations

- **Method:** `GET`
- **URL:** `/system-configuration/{{key}}`
- **Description:** Fetch the system configuration setting with the key.

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "System Configuration retrived successfully",
  "data": {
    "id": "5803bee5-630b-4fd6-8cb4-e516ee7f12b0",
    "key": "darkMode",
    "value": "on",
    "userId": "user_2pV06E4EwhAP5JWnPp6QdrhH7qr",
    "updatedAt": "2024-12-01T18:23:29.367Z",
    "createdAt": "2024-12-01T18:23:29.367Z",
    "description": null
  }
}
```

---

#### Update System Configuration

- **Method:** `PATCH`
- **URL:** `/system-configuration`
- **Description:** Update a specific system configuration by its key.
- **Headers:**
  - `Content-Type: application/json`

**Body Example:**

```json
{
  "key": "darkMode",
  "value": "off"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "System Configuration updated successfully",
  "data": true
}
```

---

# Unit Test Cases for Basic Storage Services

## User Service Test Cases

### 1. createUser

- **Test Case 1.1**: Successfully create a new user

  - Input: Valid user payload with all required fields
  - Expected Result:
    - Returns a partial user object
    - User is created in the database
    - Verify all input fields are correctly stored

- **Test Case 1.2**: Handle creation failure
  - Input: Incomplete or invalid user payload
  - Expected Result:
    - Throws an ApiError
    - Error status code is BAD_REQUEST (400)
    - No user is created in the database

### 2. getUser

- **Test Case 2.1**: Retrieve existing user by ClerkID

  - Input: Existing user's ClerkID, email, and name
  - Expected Result:
    - Returns partial user object with selected fields
    - Verify returned fields match database

- **Test Case 2.2**: Create user when not exists
  - Input: ClerkID not in database
  - Expected Result:
    - New user is automatically created
    - Default system configurations are set
      - 'darkMode' is set to 'off'
      - 'notificationType' is set to 'email'

### 3. getUserByEmail

- **Test Case 3.1**: Successful email verification

  - Input: Registered email
  - Expected Result: Returns true

- **Test Case 3.2**: Unregistered email
  - Input: Unregistered email
  - Expected Result:
    - Throws ApiError
    - Error status code is BAD_REQUEST
    - Error message is "Wrong not registered"

### 4. updateUser

- **Test Case 4.1**: Successfully update user

  - Input: Valid ClerkID and update data
  - Expected Result:
    - Returns true
    - User data is updated in the database

- **Test Case 4.2**: Update with invalid ClerkID
  - Input: Non-existent ClerkID
  - Expected Result:
    - Throws ApiError
    - Error status code is BAD_REQUEST

## Booking Record Service Test Cases

### 1. createBookingRecord

- **Test Case 1.1**: Successfully create booking record

  - Input: Valid BookingRecord payload
  - Expected Result:
    - Returns partial BookingRecord
    - Record is created in the database

- **Test Case 1.2**: Create booking with invalid data
  - Input: Incomplete or invalid payload
  - Expected Result:
    - Throws ApiError
    - Error status code is BAD_REQUEST

### 2. getBookingRecord

- **Test Case 2.1**: Retrieve existing booking record

  - Input: Valid booking record ID
  - Expected Result:
    - Returns the specific booking record
    - Verify all record details are correct

- **Test Case 2.2**: Retrieve non-existent booking
  - Input: Invalid or non-existent booking ID
  - Expected Result: Returns null

### 3. getAllBookingRecord

- **Test Case 3.1**: Retrieve all booking records for a user

  - Input: Valid user ID
  - Expected Result:
    - Returns array of booking records
    - All records belong to the specified user

- **Test Case 3.2**: User with no booking records
  - Input: User ID with no records
  - Expected Result: Returns empty array

## Document Metadata Service Test Cases

### 1. createDocumentMetadata

- **Test Case 1.1**: Successfully create document metadata
  - Input: Valid DocumentMetadata payload
  - Expected Result:
    - Returns partial DocumentMetadata
    - Includes specific selected fields
    - Record created in the database

### 2. getAllDocumentMetadata

- **Test Case 2.1**: Retrieve all metadata for an author
  - Input: Valid author ID
  - Expected Result:
    - Returns array of document metadata
    - All records belong to the specified author
    - Includes specific selected fields

### 3. getDocumentMetadata

- **Test Case 3.1**: Retrieve specific document metadata
  - Input: Valid document metadata ID
  - Expected Result: Returns the specific metadata record

### 4. getDocumentMetadataByFileId

- **Test Case 4.1**: Retrieve metadata by file ID
  - Input: Valid file ID
  - Expected Result: Returns the first matching metadata record

### 5. getDocumentMetadataByBookingIdFromDB

- **Test Case 5.1**: Retrieve metadata by booking ID
  - Input: Valid booking ID
  - Expected Result:
    - Returns array of matching metadata records
    - Includes specific selected fields

### 6. updateDocumentMetadata

- **Test Case 6.1**: Successfully update document metadata
  - Input: Valid metadata ID and update data
  - Expected Result:
    - Returns true
    - Version is incremented
    - Record updated in the database

### 7. deleteDocumentMetadata

- **Test Case 7.1**: Delete document metadata
  - Input: Valid metadata or file ID
  - Expected Result:
    - Returns true
    - Record removed from the database
    - Handles deletion by either ID or fileId

## System Configuration Service Test Cases

### 1. createSystemConfiguration

- **Test Case 1.1**: Successfully create system configuration
  - Input: Valid SystemConfiguration payload
  - Expected Result:
    - Returns partial SystemConfiguration
    - Record created in the database

### 2. getSystemConfiguration

- **Test Case 2.1**: Retrieve system configuration

  - Input: Valid user ID and configuration key
  - Expected Result: Returns the specific configuration

- **Test Case 2.2**: Non-existent configuration
  - Input: Invalid user ID or key
  - Expected Result:
    - Throws ApiError
    - Error status code is BAD_REQUEST

### 3. updateSystemConfiguration

- **Test Case 3.1**: Successfully update configuration

  - Input: Valid key, user ID, and new value
  - Expected Result:
    - Returns true
    - Configuration updated in the database

- **Test Case 3.2**: Update with invalid parameters
  - Input: Non-existent key or user ID
  - Expected Result:
    - Throws ApiError
    - Error status code is BAD_REQUEST
