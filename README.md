#README

Project idea is to retrieve and display most basic data about lego sets.
It should display data like current price on some popular auctions sites, ppb (price per brick), pieces count, rating.
There will be more info available as more lego services will be integrated into this project.

##What's to be done

- Separate data fetch module with processing and displaying received data
- [Progressive web app](https://developers.google.com/web/progressive-web-apps/) basing on 
returned data structure
    - Material design
    - Mobile apps support
    - Thoughtful design
- (Nice to have)
    - ability to login to brickset/rebrickable account and see data in context
    - scan with phone camera for bar
    - history of viewed data
    - cache

##What's new:

v 0.2.0
- Uses [node-get-lego-data](https://github.com/klapek/node-get-lego-data) module for fetching information about lego set.
- Deploys to heroku [fetch-lego-set](https://fetch-lego-set.herokuapp.com/) automatically from master.

## What will it do

v 1.0.0

Based on lego serie number fetches data like:
- Bricks count
- Set pic preview
- Best price on allegro
- Best price on ebay
- Suggested price on relase
- Release day

It provides links to some aggregates like:
- Brickset
- Rebrickable
- Bricklink

#Running project

1. You will have to make enviromental variables that are visible via process.env you can 
store them in an .env file that will be loaded on startup, more info in [node-get-lego-data](https://github.com/klapek/node-get-lego-data) module:
     
    ```
    ALLEGRO_APIKEY=qwert
    BRICKSET_APIKEY=qazxsw
    REBRICKABLE_APIKEY=123ewqdsa
    ```
    
    Api keys are obtained from sites as follows
    - [allegro webapiKey](http://allegro.pl/webapi)
    - [rebrickable apiKey](http://rebrickable.com/api/)       
    - [brickset apikey](http://brickset.com/tools/webservices/v2)
    
2. You have to install node modules with `npm install`
3. You run the server with `npm start`

##Server
Default port is currently set to `5000` so endpoint should be available on `localhost:5000`,
but `process.env.port` is taking precedense so most hosting providers should work fine.

There is currently one GET endpoint: `/getset/:setId` it returns json data with fields like 
```
{
    rebrickable : {},
    allegro : {},
    brickset: {},
    links :{}
}
```
Project is constantly changing so nothing is set in stone yet.

