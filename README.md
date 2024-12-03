# Basic Storage API Documentation

This API provides endpoints to manage document metadata, users, bookings, and system configurations.

## Contact Support

- **Email:** [moklasurrahman9797@gmail.com](mailto:moklasurrahman9797@gmail.com)

---

## Base URL

```
{{baseUrl}} = http://localhost:<PORT>/api/v1
```

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
  "message": "All Document Metadata retrieved successfully",
  "data": [
    {
      "id": "e23d99eb-0561-4366-bbad-c4600481aced",
      "title": "Document A",
      "authorId": "user_12345"
    },
    {
      "id": "3b01f774-43bc-4bf5-bcf4-a355324199d3",
      "title": "Document B",
      "authorId": "user_67890"
    }
  ]
}
```

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
  "fileId": "file_67890"
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
    "lastModified": "2024-12-03T18:04:10.057Z"
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
  "message": "Document Metadata retrieved successfully",
  "data": {
    "id": "e23d99eb-0561-4366-bbad-c4600481aced",
    "title": "Shohojogi SRS.pdf",
    "authorId": "user_12345",
    "lastModified": "2024-12-01T21:06:51.795Z",
    "version": 0,
    "fileId": "file_67890"
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
  "title": "Updated Title",
  "authorId": "user_12345",
  "fileId": "file_67890"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Document Metadata updated successfully"
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
  "message": "Document Metadata deleted successfully"
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
  "message": "Document Metadata retrieved successfully",
  "data": {
    "id": "3b01f774-43bc-4bf5-bcf4-a355324199d3",
    "title": "Document Example",
    "authorId": "user_12345",
    "fileId": "file_67890"
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
  "message": "Cached Metadata retrieved successfully",
  "data": [
    {
      "id": "e23d99eb-0561-4366-bbad-c4600481aced",
      "title": "Cached Document A",
      "version": 0,
      "fileId": "file_12345"
    },
    {
      "id": "3b01f774-43bc-4bf5-bcf4-a355324199d3",
      "title": "Cached Document B",
      "version": 1,
      "fileId": "file_67890"
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
  "message": "User retrieved successfully",
  "data": {
    "id": "user_12345",
    "name": "John Doe",
    "email": "john.doe@example.com"
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
  "message": "User retrieved successfully",
  "data": {
    "id": "user_12345",
    "name": "John Doe",
    "email": "john.doe@example.com"
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
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "address": "123 Main St"
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
    "name": "John Doe"
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
  "email": "updated@example.com",
  "address": "123 Updated St"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "User updated successfully"
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
  "message": "All Bookings retrieved successfully",
  "data": [
    {
      "id": "38af00a4-5107-4366-a6a0-41796a505455",
      "title": "Booking A",
      "userId": "user_12345"
    },
    {
      "id": "913bcc1b-0946-46aa-b283-ef8a9d83c2f5",
      "title": "Booking B",
      "userId": "user_67890"
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
  "title": "New Booking",
  "description": "Test Description",
  "bookingDate": "2024-12-10T10:00:00Z"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Booking created successfully",
  "data": {
    "id": "913bcc1b-0946-46aa-b283-ef8a9d83c2f5",
    "title": "New Booking"
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
  "message": "Booking retrieved successfully",
  "data": {
    "id": "38af00a4-5107-4366-a6a0-41796a505455",
    "title": "Pulikidz Booking",
    "userId": "user_12345"
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
  "key": "exampleKey",
  "value": "exampleValue"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Configuration created successfully",
  "data": {
    "key": "exampleKey",
    "value": "exampleValue"
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
  "message": "System Configuration retrieved successfully",
  "data": {
    "key": "exampleKey",
    "value": "exampleValue"
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
    "key": "ky"
  "value": "Updated Value"
}
```

**Response Example:**

```json
{
  "statusCode": 200,
  "success": true,
  "message": "Configuration updated successfully",
  "data": {
    "key": "exampleKey",
    "value": "Updated Value"
  }
}
```

---
