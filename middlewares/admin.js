const verifyAdmin = (req, res, next) => {
    // Check if the user is an admin
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Unauthorized: Only admin users can perform this action' });
    }
    next();
};

exports.verifyAdmin = verifyAdmin;