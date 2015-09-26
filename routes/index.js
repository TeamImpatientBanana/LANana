// Define global variable array
exports.tokens = [];

/*
 * GET home page.
 */
exports.index = function(req, res){
    exports.tokens.push("9999");
    res.render('index', { title: 'Express' });
};

/*
 * GET join game page.
 */
exports.getJoin = function(req, res) {
    res.render('join', {
        title: 'Join Game',
        token: exports.tokens[0]
    });
};

/*
 * POST join game page.
 */
exports.postJoin = function(req, res) {
    // set a session on valid auth token
    var token = req.body.token;
    if (exports.tokens.indexOf(token) > -1) {
        res.send(token);
    }
    else {
        req.flash("error", "Invalid game token");
    }
};
