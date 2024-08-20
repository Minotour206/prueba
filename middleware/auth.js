const jwt = require('jsonwebtoken');

const userExtractor = async (request, response, next) => {
    try {
        const token = request.cookies?.accessToken;
    if (!token) {
        response.sendStatus(401);
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.id);
    request.user = user;

    } catch (error) {
        response.sendStatus(403);
    }
    next();
};

module.exports = { userExtractor };