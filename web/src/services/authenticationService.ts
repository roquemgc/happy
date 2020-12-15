import crypto from 'crypto'
import api from './api'

export default class AuthenticationService {

    async doLogin (email: string, userPassowrd: string) {
        try {
            const {data: jwt, status} = await api.post(`auth/login`, {email: email, password: userPassowrd});
            if (status === 401) throw new Error('Usuário ou senha inválidos')
            return jwt
        } catch (err) {
           throw err
        }
    }

    _encrypt (data: any) {
        try {
            const passHash = crypto
                .createHash('md5')
                .update(process.env.REACT_APP_CLIENT_ID || '', 'utf8')
                .digest('hex')
                .toUpperCase()
            const nonce = Buffer.alloc(16, Math.random().toString(36).substr(7))
            const alg = 'aes-256-cbc'
            const cipher = crypto.createCipheriv(alg, passHash, nonce)
            return {
                nonce: nonce.toString('base64'),
                encodedData: cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
            }
        } catch (err) {
            throw err
        }
    }
}
