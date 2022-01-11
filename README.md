[Paw-perty - Try it live!](http://paw-perty.herokuapp.com/)
![pawperty-logo-github](https://user-images.githubusercontent.com/88124383/148818540-49e0350b-1158-4501-bdcf-2ab00569bb94.png)
<p align="center">
  <img src="https://github.com/kcheng16/paw-perty/blob/main/app/assets/images/splash.gif">
</p>
Paw-perty, an AirBnB clone, is a dog-siting booking application that allows users to:
* Freely explore listings in various cities
* Reserve a spot in a friendly new home
* Become a super-host by creating your own listing
* Leave a trail of ratings and reviews of a previous stay

# Table of Contents
* [Technologies](#technologies)
* [Installation](#installation)
* [Features](#features)

# Technologies
### Frontend
* Javascript
* React.js
* Redux
* HTML5 / CSS / Sass
* JQuery
* JBuilder

### Backend
* Ruby on Rails
* PostgreSQL

### Additional Technologies
* Google Maps API
* Amazon Web Services - S3
* Webpack

# Installation
* **Clone this repo git clone:** https://github.com/kcheng16/paw-perty
* **Ensure to have postgreSQL installed and running**
* **Install NPM packages:** *npm install*
* **Install Ruby gems:** *bundle install*
* **Create the Database:** *rails db:create*
* **Setup the datebase:** *rails db:setup*
* **Start your local server:** *rails s*
* **Start webpack bundlers:** *npm run start*

# Features
#### Search for listings by city name
Listings are fetched depending on the search field city name input. Only listings similar to that city name will be displayed and marked within Google Maps API.
![search](https://github.com/kcheng16/paw-perty/blob/main/app/assets/images/search.gif)
The app reads the `:city` wildcard from the URL to construct its query. 

* Create, update, and delete own listings and attach 5 pictures
* Create, update, and delete a review on a listing
* Create, update, and delete upcoming reservations 
