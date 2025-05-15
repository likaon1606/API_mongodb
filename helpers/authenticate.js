import 'dotenv/config'
import jwt from 'jsonwebtoken'

export function generateToken(email) {
  return jwt.sign({email}, process.env.JWT_TOKEN_SECRET, { expiresIn: '1h' })
}

export function verifyToken(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer', '').trim()
  
  if (!token) {
    res.status(401).json({ error: 'Token required' })
  }

  try {
    const dataToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET)
    next()
  } catch (error) {
    res.status(401).json({ error: 'Token Invalid' })
  }
}

