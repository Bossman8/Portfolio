var Views = 0;

module.exports = function(app) {
  //   window.onload = increase();

  function increase() {
    app.post("/api/new", (req, res) => {
      User.create({
        views: req.body.views + 1
      });
    });
  }

  app.get("/api", (req, res) => {
    res.json(Views);
  });
};
