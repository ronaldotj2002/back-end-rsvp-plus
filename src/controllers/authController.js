const AuthService = require('../services/AuthService');

const authService = new AuthService();

class AuthController {
    static async login(req, res) {
        const { email, senha} = req.body;
console.log(email, senha);
        try {
            const login = await authService.login(email, senha)
            res.status(200).send(login)

        } catch (err) {
            res.status(401).send({message: err.message})
        }

        
    } 
}


module.exports = AuthController;