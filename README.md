# API for Fluree
## Football

1)  ### Create: `POST /football`
    _Request Body (example):_

       ```json
           
      {
    "name": "dinamo",
    "country": "ukraine",
    "createDay": "04.07.2005",
    "team": [
            {
            "_id": "team$vasya",
            "name": "vasya",
            "birthday": "03.09.1992",
            "awards": [
                {
                "_id": "awards%world2008",
                "type": "Camp of the world",
                "date": "2008"
                },
                {
                "_id": "awards%euro2016",
                "type": "Camp of the euro",
                "date": "2016"
                }
             ]  
           },
           {
           "_id": "team$kolya",
            "name": "kolya",
            "birthday": "27.06.1990",
            "awards": []
           } 
         ]
      }
      ```

    ```"_id": "football"``` can not be specified

2) ### Get all from football: `GET /users`


3) ### Get football team by country: `GET /users/:country`


## Team
1) ### Create: `POST /team`

   _Request Body (example):_

    ```json
        [
            {
            "_id": "team",
            "name": "vasya",
            "birthday": "03.09.1992",
            "awards": [
                {
                "_id": "awards%world2008",
                "type": "Camp of the world",
                "date": "2008"
                },
                {
                "_id": "awards%euro2016",
                "type": "Camp of the euro",
                "date": "2016"
                }
             ]  
           },
           {
           "_id": "team",
            "name": "kolya",
            "birthday": "27.06.1990",
            "awards": []
           } 
         ]
    ```

2) ### Get all from team: `GET /team`


3) ### Get player by name: `GET /team/:name`

## Awards

1) ### Get all from team: `GET /awards`


