curl "https://tic-tac-toe-api-development.herokuapp.com/games/:id" \
  --include \
  --request PATCH \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{ "game": {
                "cell":{
                    "index": "0",
                    "value": "X"
                    },
                    "over": false
                }
            }'


echo