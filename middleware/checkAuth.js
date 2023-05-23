module.exports = (req, res, next) => {
    const authenticated = req.header("authenticated");

    if(authenticated === "no") {
        res.status(403).json({
            msg: "You are not authenticated"
        });
    }
    else next();
}