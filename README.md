#README

##What's new:
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

1. You will have to create your own configuration .json files with:
    - allegro configuration - [webapiKey](http://allegro.pl/webapi), country::
        ```
        allegro.json
        {
            "webapiKey" : "xxx",
            "country" : 1 /*1 -> Poland*/
        }
        ```
    - rebrickable configuration - "[apiKey](http://rebrickable.com/api/)" .
        ```
        rebrickable.json
        {
            "apiKey": "xxx"
        }
        ```
2. You have to install node modules with `npm install`
3. You run the server with `npm start`

##Server
Default port is currently set to `500` so endpoint should be available on `localhost:500`

There is currently one GET endpoint: `/getset/:setId`

    
