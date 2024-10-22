const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert('path/to/your/serviceAccountKey.json'),
});