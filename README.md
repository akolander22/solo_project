# solo_project

hosted on heroku http://frozen-falls-30491.herokuapp.com/

Solo Project for Prime Digital Academy

The purpose of this project was to create a user friendly experience to log in and track television shows the user is watching.

Upon registering/logging in a user is then asked to search for a specific title of a TV show.  The search returns(depending on how broad the title is) a list of various shows that could be related to the intended search. Each return also lists a brief description of the specific show.  If the show is in fact the one they searched for the user can select add to my shows.  This button takes the specific show and adds it to the collection of the user's shows.  

After the user adds any shows they are looking for they can begin tracking episodes watched.  In order to do this the top Navbar has a tab for MyShows.  Once clicked the user will see a list and progress bars for all of their shows.  They can add/subtract individual episodes or add all the shows episodes if they know they have already completed it.  On the right there are images being displayed of any show that is completed or caught up.  These are split into 2 sections based on whether the show is still running or if the show is complete and no longer on the air.  

There is also a progress tab on the top navbar.  By clicking on this tab the user can see a list and breakdown of total episodes watched vs. how many they intend to watch.  There is also a breakdown of the networks for shows the user is watching.  This is to give some idea of what they watch most often, each network has a progress bar to show how much of that network has been watched as well.  At the very top there is a total progress bar to show how close they are to completing their overall goal.

This application was completed using the TVMaze Api which provided a wealth of information on pretty much every televsion show imaginable.  The return on the call to this API returns a JSON object which was used to get specific information and store it within a users profile.  Using angular and angular-routes I was able to make a easily interactive application.  

Styling was done almost entirely in bootstrap.

This is a MEAN stack application so the database is stored in MongoDB and while on heroku uses MLab to work.
