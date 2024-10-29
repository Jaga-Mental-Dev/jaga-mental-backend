import admin from "firebase-admin";
import "firebase/auth";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const credentials = require("./firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const auth = admin.auth();

export { auth };
