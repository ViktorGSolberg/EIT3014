# EIT3014

## Web server
Start server:
```
npm run server
```


## API
### Endpoints
Base url: localhost:5000/api

 ```
 GET
 @Route (All): <baseURL>/park
 @Param (Optional, GET one): <baseURL>/park/<entity id>
 
 200 OK:
  {
    "ledStrips": [#000000, #000000, ...],
    "ledBoxes": [#000000, #000000, ...],
    "_id": "5e44379718b...",
    "screen_1": "uploads\\screen_1.jpg",
    "screen_2": "uploads\\screen_2.png",
    "__v": 0
  }
 ```
 
 ```
 PUT
 Updates one entity
 
 @Route: <baseURL>/park/update/<entity id>
 @Param (Requierd): _id = 5e44379718b...
 
 200 OK:
 Returns the updated JSON-object.
 ```
 
