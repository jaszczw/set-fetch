#README

Project idea is to retrieve and display most basic data about lego sets.
It should display data like current price on some popular auctions sites, ppb (price per brick), pieces count, rating.
There will be more info available as more lego services will be integrated into this project.

##What's new:

v 0.0.4
- Support for brickset in GET response
- Deployed onto heroku on [fetch-lego-set](https://fetch-lego-set.herokuapp.com/)
- Supports basic modularity, in case for example brickset/rebrickable handling were to be extracted it shouldn't be too much of a hassle.

v 0.0.3
- Fetches data from allegro ordering by price and filtering by category 'Lego'
- Separated files into smaller modules, configs defined per module.

v 0.0.2
- Provides links to common aggregates (bricklink, brickset, rebrickable)

v 0.0.1
- Fetches data from rebrickable about set passed in GET request

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

1. You will have to create your own configuration .json files or make enviromental variables that are visible via process.env with data:
    - for allegro configuration [webapi](http://allegro.pl/webapi)
    
        ```
        ./lib/allegro/private-config.json || process.env.ALLEGRO_PRIVATE_CONFIG
        {
            "webapiKey" : "xxx",
            "country" : 1 /*1 -> Poland*/
        }
        ```
    - for rebrickable configuration [api](http://rebrickable.com/api/)
    
        ```
        ./lib/rebrickable/private-config.json || process.env.REBRICKABLE_PRIVATE_CONFIG
        {
            "apiKey": "xxx"
        }
        ```
        
    - for brickset configuration [webservices](http://brickset.com/tools/webservices/v2)
    
        ```
        ./lib/brickset/private-config.json || process.env.BRICKSET_PRIVATE_CONFIG 
        {
            "apiKey": "xxx"
        }
        ```
2. You have to install node modules with `npm install`
3. You run the server with `npm start`

##Server
Default port is currently set to `5000` so endpoint should be available on `localhost:5000`

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

