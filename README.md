# MAPP

Welcome to Mapp! This is an app I'm making that takes in a CSV with columns "latitude", "longitude", and "name" and plots each row as a tooltip on a map. It allows further columns to become tooltip details. This uses the Mapbox GL JS API. This project needs built out quite a bit more; eventually I want the CSV to be editable in-browser, for customization options for tooltip display and styling to be available to the user, and the vital end goal: exporting your map to be visible to others. Current tasks are making an accessible, editable CSV viewer in-browser and getting user authentication up and running.

This is mid-process, vying for my time (and losing, currently) with setting up a thorough portfolio and handling ongoing job applications.

If this is Sam reading this (that's very likely), there's a whole section for how to get this project started on your specific laptop. Jump straight there, please, rather than just trying `npm start`.

`npm start` runs this app in the development mode and it will open to [http://localhost:3000](http://localhost:3000) by default.

The page will reload when you make changes.\
You may also see any lint errors in the console.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Use Notes

**Input:**
GIS charts
User-uploaded CSV files

**Output:**
Map
Table of CSV data

## Product

**Featuring for MVP:**
- Custom name and notes field
- Whatever the third+ columns are in their CSV, we take it as a type and allow them to filter results by those column values. They become types/filters. (I've done this before in my professional work for CRE Planning and Development, so it's a bit back-burner while I explore newer-to-me topics.)
- Search based on words; a fuzzy search

**Stretch Goal Ideas:**
- User can create a new point in the map GUI, edits its properties, add that point automatically to the table, and later export their new point to a CSV file.

#### Technical breakdown
Process of saving that I anticipate:
4. I send a request to mapbox that contains the markers of CSV-originated geoJSON
(Now data is mapped)
5. If the user is logged in, there is a button to "save this collection"
6. If selected, their CSV data is sent to the backend. I'm not sure where in here we map them to a collection model instance, but we do. This is perhaps somehow a form? I'm not sure.
7. 

1. User uploads CSV file
- How to most safely intake data a user submits, considering it could be anything?
- User can see their CSV file as a table below their map
- We will want to take in this data and convert it into GeoJSON to send to the Mapbox API. I'm not sure how to architect out this separate concern.
2. User can save their "collection" if they're logged in
- CSV data is mapped to the backend model, who eventually handles incoming addresses and turns them into geocodes (longitude and latitude)
- Model saves geocodes only? Perhaps permit users to select if they save the addresses separately for more legible human viewing?

In other words,
- Map each row of the file data to a model, validating it in-model along the way
- Guard against attack in the model. I’m not sure if this is exactly the same as the previous step
- Get that model back and put it into a table again and a map again

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

### If I were on my Mac

To begin the backend application, navigate to the folder next to this app's parent folder (called `mapp-backend`). It will run on port `:4000` by default unless that port is taken. Navigating to that folder will cue your computer to offer you instructions.

Run Postgres, an application on the computer that acts as a server for multiple databases. You can see whether it's running by looking at the top bar of your Mac: if the elephant silhouette says "Stop", that means it's running. From there, you can navigate into the pgAdmin 4 software. From the folder hierarchy in the sidebar of `PostgreSQL 14` (our server-running software that we just started up), there's a subfolder called `ServerForAllDatabases` and then `Databases`. (These names are arbitrary and aren't inherently called these things. They're just what they're called on my computer.) From here you're looking for two databases: one called `mapp_backend_dev` and one called `mapp_backend_test`. Since you're running Postgres already, you should be able to access these databases. In pgAdmin 4, the file structure off of your database is `datbabase_name`->`Schema`->`public`->`Tables`. From here you can right-click on `Tables` and select `Query Tool`. From here you can write SQL such as `SELECT * FROM COLLECTIONS`.

### Specific to my Windows setup

I recently returned to this project and had a hard time getting started on my personal device. This subsection of the README is specific to these details and aren't relevant to others.

#### Finding the Files Locally

Open an instance of the command line prompt called "Command Prompt". It's the one saved in the upper section of my start menu.

Next to the "new tab" "+" button is a dropdown. Select "Ubuntu".

From here you can access your bash settings and can use linux commands like `ls` again. This project currently uses the folders called "mapp" and "mapp-backend" on your local machine, but not "mapp-ror".

In your mapp project, run `pkgx npm install`, since you're using `pkgx` as your package manager for this project. Then run `pkgx npm start`. It'll come to `:3000`.

Open a new Ubuntu tab and navigate to `mapp-backend`. You'll see printed instructions here once you enter the folder. Follow them. Just in case it's been five years since you looked at this and you've changed computers, here's the instructions:

```
Don't forget to run this command if you havent in this tab or window yet: rvm use 3.1.2 ..without it you will get errors about your Ruby version, libraries not having their native extensions, and similar misleading messages.

Run these commands to get started quickly:
bundle install
sudo service postgresql start
rake db:create
rails s
```

The password you'll need for postgres is the one to your old mac. Obviously only run `rake db:create` if you've worked in this project for a long time or want to refresh your state. You will need to declare your ruby version in every new tab in this repository.

To mess around in postgres, you'll need to log in using `sudo -i -u postgres`. After this, you can commands like `psql`.

If you need more help, search for "mapp" in your Keep.

#### Using the database

Once you're in the `mapp-backend` folder and you've started postgres with `sudo service postgres start`, you'll need to log in and access your data.

`sudo -i -u postgres` gets you to a new prompt that looks like this:

```
postgres@Computer-Name: ~$
```

From here, you want to enter the world of postgres: run the `psql` command.

Your new prompt looks like this:

```
postgres=#
```

From here, there are a number of commands you can run. here's the ones I find most immediately helpful.

| command | action |
|:--------|:-------|
| `\?` | help menu |
| `\l` | show all database connections |
| `\x` | expands your display |


To access your data within a given database, you have to open a database. To do so, run `\c mapp_backend_development`. This should permit you to access your data with SQL. This will get you another new namespace.


```
database_name=#
```

Overall you can expect getting to a DB to look like this:

```
postgres=# \c database_name
You are now connected to database "database_name" as user "your-user".
database_name=# SELECT * from "table";
```

Note that your SQL must conclude with a semicolon; if it isn't present, add it on the next line after you've pressed enter to complete and run the code. On Windows, at least, the quotation marks are also required around your table name.

Your response should look something like this.

```
-[ RECORD 1 ]----------------------------------------------------
id         | 1
file_name  | somebodys collection
contents   | there are a lot of places in here i am certain of it
created_at | 2024-02-01 20:59:50.664711
updated_at | 2024-02-01 20:59:50.664711
```

## Learnings

### `useEffect`/React Query library

Unlike `useEffect` and `useState`, the typical vanilla-y React hooks for managing state, the ReactQuery library will manage caching, background updates, and stale data without any additional setup or code if you simply tell it where to get your data from. React Query uses custom hooks for this like `useQuery`, which calls on `useEffect` and `useState` internally. (You can find the code underlying [`useQuery`](https://dev.to/wra-sol/how-does-react-querys-usequery-work-5gna) here.)

### MapBox API

Things to know about the many confusing APIs offered by Mapbox:
Raster in Mapbox API-speak is images/satellite view
Vector is what we want
We don’t want something static; we want users to be able to click on points and edit their data/refresh specific markers
I think we'll need to ask them in a geoJSON format
If we want more customized icons, we can look to the [Maki icon editor](https://labs.mapbox.com/maki-icons/editor/).
