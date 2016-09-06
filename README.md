#README

##What does it do:
v 0.0.2
- Provides links to common aggregates (bricklink, brickset, rebrickable)
- Fetches data from rebrickable about set passed in GET request

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

You will have to create your own config.json file with:

 - allegro configuration - webapiKey 
 - rebrickable configuration - "apiKey" obtainable on rebrickable page.

config.json:
```
{
  "allegro" : {
    "webapiKey" : "xxx",
    "country" : 1 /*1 -> Poland*/
  },
  "rebrickable" : {
    "apiKey": "xxx"
  }
}
```