module.exports = (req, res, next) => {
    const userTenant = req.user?.tenant?.toString();
    const targetTenant = req.params.tenantId || req.body.tenantId;

    if (targetTenant && userTenant !== targetTenant) {
        return res.status(403).json({ error: 'Tenant mismatch or unauthorized access' });
    }

    next();
};