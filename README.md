tennis_courts_api
=================

###Getting it to run
This api runs off of mongodb so make sure you have it installed. Check by using the `which mongo` command.  If it returns a path then you're in good shape.  If not run `brew install mongodb`.  Make sure your mongo database is running (more information about this can be found in the mongo docs) and be sure to drop the tennis_court_api database.

####seeding
Be sure to seed your database before running the api.  `cd` into the root directory of the api and run `node seed_script.js`.  Running this script will print a few lines out to the console.  Once it is done logging to the console, kill the script with `ctrl + C`.

---
Make sure all your packages are installed with `npm install`.  Finally, run `grunt server` to fire up the server.  The API will be running on localhost:3000 by default.  Take a look at the `app.js` for avaliable endpoints. 


