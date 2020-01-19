var path = require("path");
module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/html/main.html"));
      });
    
      app.get("/kpop", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/html/kpop.html"));
      });

      app.get("/rock", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/html/rock.html"));
      });

      app.get("/classical", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/html/classical.html"));
      });

      app.get("/jazz", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/html/jazz.html"));
      });

      app.get("/edm", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/html/edm.html"));
      });

      app.get("/hiphop", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/views/html/hiphop.html"));
      });
    
      // blog route loads blog.html
    //   app.get("/blog", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/blog.html"));
    //   });
    
    //   // authors route loads author-manager.html
    //   app.get("/authors", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/author-manager.html"));
    //   });



    
}