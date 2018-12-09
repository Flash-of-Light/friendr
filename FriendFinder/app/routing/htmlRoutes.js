app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "view.html"));
  });

//  A GET Route to /survey which should display the survey page.



// A default, catch-all route that leads to home.html which displays the home page.