var db = require("../models");
module.exports = function(app) {
// to landing page
app.get("/", function(req,res){
  res.render("home",{msg:""})
});

// to buyer form page with search input
app.get("/buyer", function(req,res){
  res.render("buyer",{msg:""})
});

// get buyer searchQuery result
app.get("/buyer/:title", function(req, res) {
  db.Books.findAll({where:{
    title:{
      $like:'%'+req.params.title+'%'
    }
  }
  }).then(function(dbBooks) {
    res.render("search", {
    books:dbBooks
    });
  });
});

// to display query result
app.get("/cart", function(req,res){
  res.render("cart",{msg:"Welcome to the shopping cart"})
});

// show all available books
app.get("/books", function(req, res) {
  db.Books.findAll({}).then(function(dbBooks) {
    res.render("book", {
      msg: "",
      books: dbBooks
    });
  });
});

app.get("/seller",function(req,res){
  res.render("seller",{msg:""})
});

//to login page for both seller/ buyer ???? check with team...
app.get("/login",function(req,res){
 res.render("login",{msg:""})
});

app.get("/register",function(req,res){
 res.render("signUp",{msg:""})
});

// Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
