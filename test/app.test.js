const fs = require("fs");
  



test("file content", () => {
    fs.readFile("./app.js", 'utf8', function(err,data){
        expect(data).toMatch(/render || pages || index || ejs/m);
        if(err){
            console.log("no data like res || render || pages || index");
        }
    });
})