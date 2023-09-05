# MAPP

Welcome to Mapp! This is a use of the Mapbox GL JS API to the ends of creating mapping software that's more approachable and direct than the default Mapbox or Google Maps products. This project needs built out quite a bit more.

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Use Notes

**Input:**
GIS charts
User-uploaded CSV files

**Output:**
Map
Table of CSV data

**Featuring for MVP:**
- Custom name and notes field
- Whatever the third+ columns are in their CSV, we take it as a type and allow them to filter results by those column values. They become types/filters
- Search based on words; a fuzzy search

Things to know about the many confusing APIs offered by Mapbox:
Raster in Mapbox API-speak is images/satellite view
Vector is what we want
We don’t want something static; we want users to be able to click on points and edit their data/refresh specific markers
If we want more customized icons, we can look to the [Maki icon editor](https://labs.mapbox.com/maki-icons/editor/).

#### Technical breakdown
Process of saving that I anticipate:
CSV is uploaded
Data 




1. User uploads CSV file
- How to most safely intake data a user submits, considering it could be anything?
- We will want to take in this data and convert it into GeoJSON to send to the Mapbox API
- Data is mapped to the model, who eventually handles incoming addresses and turns them into geocodes (longitude and latitude)
- Model saves geocodes only? Perhaps permit users to select if they save the addresses separately for more legible human viewing?
- Points are fed back into React
- React creates map
- React creates a lot of “AddPoint” calls and loops through all of the user-submitted geocodes to make them visible on the map

In other words,
- Intake form
- Transfer FormData to file
- Transfer file to the file’s data
- Map each row of the file data to a model, validating it in-model along the way
- Guard against attack in the model. I’m not sure if this is exactly the same as the previous step
- Send model instances to React

Controller methods:
/ GET - home screen, empty intake form
/ POST - form submission
/ GET - map?

### Product Ownership:
#### Big:
Who manages the CSV data on upload?
Get Rails project set up with React frontend
Architect the application (see above)
Create safe users

#### Small:
- Set up repo
- Figure out what set marker requests should look like
- Attempt to convert CSV data into a load of marker requests
- List markers out on map successfully
- Iterate through markers in zoomed-in mode
- Save zoom & center position and create a button to permit the user to navigate instantly to the wide map view

## Getting Started with Entire App

To begin this frontend application, navigate to the parent file (where this README is), type `npm install`, and then type `npm start`.

To begin the backend application, navigate to the folder next to this app's parent folder (called `mapp-backend`), type `bundle install`, and then type `rails s`. This project will run on port `:4000` by default unless that port is taken.

Run Postgres, an application on the computer that acts as a server for multiple databases. You can see whether it's running by looking at the top bar of your Mac: if the elephant silhouette says "Stop", that means it's running. From there, you can navigate into the pgAdmin 4 softtware. From the folder hierarchy in the sidebar of `PostgreSQL 14` (our server-running software that we just started up), there's a subfolder called `ServerForAllDatabases` and then `Databases`. (These names are arbitrary and aren't inherently called these things. They're just what they're called on my computer.) From here you're looking for two databases: one called `mapp_backend_dev` and one called `mapp_backend_test`. Since you're running Postgres already, you should be able to access these databases. In pgAdmin 4, the file structure off of your database is `datbabase_name`->`Schema`->`public`->`Tables`. From here you can right-click on `Tables` and select `Query Tool`. From here you can write SQL such as `SELECT * FROM COLLECTIONS`.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed! (Sam speaking: The use case for `build` is to build a *production* environment version of the app.)

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
