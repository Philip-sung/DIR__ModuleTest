import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import { createCipheriv, createHash } from 'crypto'

function hashPW(pw) {
    return createHash('sha256').update(pw).digest('base64').toString();
}

const app = express();