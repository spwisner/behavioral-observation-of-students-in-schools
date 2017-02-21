#!/bin/bash

curl --include --request POST "http://localhost:4741/students" \
  --header "Content-Type: application/json" \
  --data '{
      "first_name": "'"${FIRST_NAME}"'",
      "last_name": "'"${LAST_NAME}"'",
      "born_on": "'"${BORN_ON}"'",
      "school": "'"${SCHOOL}"'",
      "teacher": "'"${TEACHER}"'",
      "grade": "'"${GRADE}"'"
  }'

# API="${API_ORIGIN:-http://localhost:4741}"
# URL_PATH="/students"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \
#   # --header "Authorization: Token token=$TOKEN" \
# --data '{
#     "first_name": "'"${FIRST_NAME}"'",
#     "last_name": "'"${LAST_NAME}"'",
#     "born_on": "'"${BORN_ON}"'",
#     "school": "'"${SCHOOL}"'",
#     "teacher": "'"${TEACHER}"'",
#     "grade": "'"${GRADE}"'"
# }'

echo
