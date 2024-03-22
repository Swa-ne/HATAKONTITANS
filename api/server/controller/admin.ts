import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = 3000; // You can use any port you prefer
const SECRET_KEY = 'your_secret_key'; // Replace with your secret key

// Define a custom interface to extend the Request type
interface AuthenticatedRequest extends Request {
    user?: { userId: number }; // Define the user property
}

// Sample users with authentication credentials
const users = [
    { id: 1, username: 'john', password: 'password123' },
    { id: 2, username: 'jane', password: 'password456' },
    // Add more users as needed
];

// Endpoint to authenticate users and generate JWT
app.post('/api/login', (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ userId: user.id }, SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Middleware to authenticate requests using JWT
function authenticateToken(req: AuthenticatedRequest, res: Response, next: () => void) {
    const token = req.headers['authorization']?.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Endpoint to get authenticated user's data
app.get('/api/users', authenticateToken, (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user?.userId; // Access userId from req.user
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json({ id: user.id, username: user.username });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
