const jwt = require('jsonwebtoken');

const secret_key = process.env.SECRET_KEY;

let createToken = (data) => {
    const token = jwt.sign({ email: data.email, password: data.password }, secret_key, {
        expiresIn: '1h'  // The token will expire in 1 hour
    });
    return token;
}


let authorize = (req, res, next) => {
    console.log("Request Object details");
    console.log(req.header('Authorization'));

    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        throw new Error("Access Denied");
    }

    // Verify JWT
    jwt.verify(token, secret_key, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        next();
    });
}


module.exports.createToken = createToken;
module.exports.authorize = authorize;