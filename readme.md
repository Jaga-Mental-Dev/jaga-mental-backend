# Jaga Mental - Backend 💻
This repository contains the backend API for Jaga Mental, a mental health application designed to help Gen Z in Indonesia track their moods through journaling. The API is built using Express.js and integrates with several cloud services to provide a seamless and efficient user experience.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Service Architecture](#service-architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Introduction📚
Mental health issues among Gen Z in Indonesia have been on the rise, with limited access to services tailored to their needs. Our team identified this gap and developed an innovative solution combining machine learning, mobile development, and cloud computing to empower users in managing their mental health. By leveraging technology, we aim to help users independently understand their mood patterns and improve their overall well-being.

## Service Architecture🏛
<div style ="display:flex;" align="center">
  <img src="https://drive.google.com/uc?id=1TI9onoufjpkp0XhMgeH7n-M-Qqskun_d" style="width:500px"/>
</div>

## Prerequisites📋
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v22.9 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Installation💾

### 1. Clone the Repository
```bash
git clone https://github.com/Jaga-Mental-Dev/jaga-mental-backend.git
cd jaga-mental-backend
```

### 2. Install Dependencies
```bash
npm install
```

or if you're using yarn

```bash
yarn install
```
## Configuration⚙

### 1. Create Firebase Key

Create a `firebase-key.json` file inside the src/ directory and place your Firebase credentials in it.

```bash
touch src/firebase-key.json
```
Example `firebase-key.json` : 
```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key_id": "your-private-key-id",
  "private_key": "your-private-key",
  "client_email": "your-client-email",
  "client_id": "your-client-id",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "your-cert-url"
}
```

### 2. Set up environment variables

Create `.env` file in the root of directory and add following variables:
```.env
# Server Configuration
PORT=3000
HOST=localhost
HOST_URL=http://localhost:3000

# Supabase Configuration
SUPABASE_URL=your-supabase-url
SUPABASE_KEY=your-supabase-key

# Bucket
BUCKET_NAME=your-bucket-name

# Base Model URL
BASE_MODEL_URL=your-base-model-url
```

## Running The Application🚀

### Development Mode

To start app in development mode :

```bash
npm run start-dev
```

### Production Mode

To start app in production mode :

```bash
npm start
```

## Folder Structure📁

```bash
jaga-mental-backend/
├── src/
│   ├── firebase-key.json    # Firebase credentials file
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── services/            # Services functions 
│   ├── middlewares/         # Middleware functions
│   ├── routes/              # Application routes
│   └── server.js            # Entry point of the application
├── .env                     # Environment variables
├── package.json             # Project dependencies and scripts
├── README.md                # Project documentation
└── .gitignore               # Ignored files in Git
└── .gcloudignore            # Ignored files in Google cloud deployment
└── Dockerfile               # Docker configuration
```

## Contributing🤝
Contributions are welcome! Please feel free to submit a pull request or open an issue for suggestions and improvements.

## License📜
Proyek ini menggunakan lisensi MIT. Silakan lihat [LICENSE](./LICENSE) untuk informasi lebih lanjut.

