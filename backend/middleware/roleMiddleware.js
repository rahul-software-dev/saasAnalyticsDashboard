module.exports = (requiredRoles = []) => {
    return (req, res, next) => {
        if (!req.user) return res.status(401).json({ error: 'User not authenticated' });

        const userRole = req.user.role;
        if (!requiredRoles.includes(userRole)) {
            return res.status(403).json({ error: 'Insufficient permissions' });
        }

        next();
    };
};