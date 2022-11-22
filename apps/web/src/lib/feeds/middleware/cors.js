import _cors from 'cors'
import runMiddleware from './run'

const cors = _cors({
  credentials: true,
  origin: true,
  methods: ['GET'],
})

const corsMiddleware = async (req, res) => runMiddleware(req, res, cors)

export default corsMiddleware
