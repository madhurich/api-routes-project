export default function handler(req, res) {
    if(req.method === 'POST') {
        // req.body.email
        res.status(201).json({ email: req.body.email })
    }
}