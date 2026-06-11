const { verifyToken } = require('../utils/jwt');

const authMiddleware = (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'Token missing',
      });
    }

    const token = authHeader.startsWith('Bearer ')
      ? authHeader.split(' ')[1]
      : authHeader;

    const decoded = verifyToken(token);
    if (process.env.NODE_ENV === 'development') {
      console.log('JWT verified');
    }
    req.user = decoded;
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }
};

module.exports = authMiddleware;
