import { Router } from 'express';

const router = Router();

router.get('/api', (req, res) => {
    res.json({ mensaje: 'Welcome to my API' });
})

export default router;