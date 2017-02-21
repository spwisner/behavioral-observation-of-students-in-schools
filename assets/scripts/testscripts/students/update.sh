#!/bin/bash

# curl --include --request PATCH "http://localhost:4741/students/1" \
#   --header "Content-Type: application/json" \
#   --data '{
#     "stu": {
#       "first_name": "Jeff",
#       "last_name": "Rebekah",
#       "born_on": "2016-02-02",
#       "school": "bronxville",
#       "teacher": "gillin",
#       "grade": "4th"
#     }
#   }'

API="${API_ORIGIN:-http://localhost:4741}"
URL_PATH="/students/${ID}"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  # --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "student": {
      "first_name": "'"${FIRST_NAME}"'",
      "last_name": "'"${LAST_NAME}"'",
      "born_on": "'"${BORN_ON}"'",
      "school": "'"${SCHOOL}"'",
      "teacher": "'"${TEACHER}"'",
      "grade": "'"${GRADE}"'"
    }
  }'

echo

# ID=2 FIRST_NAME="Jeff" LAST_NAME="W" BORN_ON="2016-02-01" SCHOOL="QUINCY" TEACHER="G" GRADE="4"
