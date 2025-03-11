import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key'; // Replace with your actual secret key

const user = {
  id: 1,
  username: 'testuser',
  email: 'testuser@example.com'
};

const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

console.log('Generated JWT:', token);