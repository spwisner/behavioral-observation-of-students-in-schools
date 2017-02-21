#!/bin/bash

curl --include --request POST "http://localhost:4741/students/${ID}/observations" \
  --header "Content-Type: application/json" \
  --data '{
    "observation": {
      "obs_num": "'"${OBS_NUM}"'",
      "obs_on": "'"${OBS_ON}"'",
      "obs_setting": "'"${OBS_SETTING}"'",
      "obs_task": "'"${OBS_TASK}"'",
      "obs_time": "'"${OBS_TIME}"'",
      "aet": "'"${AET}"'",
      "pet": "'"${PET}"'",
      "oft_m": "'"${OFT_M}"'",
      "oft_v": "'"${OFT_V}"'",
      "oft_p": "'"${OFT_P}"'",
      "obs_comment": "'"${OBS_COMMENT}"'"
    }
  }'

# ID=1 OBS_NUM=1 OBS_ON="2016-05-05" OBS_SETTING="OUTSIDE" OBS_TASK="RUNNING" OBS_TIME=10 AET=1 PET=0 OFT_M=0 OFT_V=0 OFT_P=0 OBS_COMMENT="GOOD" sh scripts/observations/create.sh
#
# curl --include --request POST "http://localhost:4741/students" \
#   --header "Content-Type: application/json" \
#   --data '{
      # "obs_num": "'"${OBS_NUM}"'",
      # "obs_on": "'"${OBS_ON}"'",
      # "obs_setting": "'"${OBS_SETTING}"'",
      # "obs_task": "'"${OBS_TASK}"'",
      # "obs_time": "'"${OBS_TIME}"'",
      # "aet": "'"${AET}"'",
      # "pet": "'"${PET}"'"
      # "oft_m": "'"${OFT_M}"'"
      # "oft_v": "'"${OFT_V}"'"
      # "oft_p": "'"${OFT_P}"'"
      # "obs_comment": "'"${OBS_COMMENT}"'"
      # "student_id": "'"${STUDENT_ID}"'"
#   }'



# API="${API_ORIGIN:-http://localhost:4741}"
# URL_PATH="/observations"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request POST \
#   --header "Content-Type: application/json" \
#   # --header "Authorization: Token token=$TOKEN" \
#   --data '{
#     "student": {
#       "first_name": "'"${FIRST_NAME}"'",
#       "last_name": "'"${LAST_NAME}"'",
#       "born_on": "'"${BORN_ON}"'",
#       "school": "'"${SCHOOL}"'",
#       "teacher": "'"${TEACHER}"'",
#       "grade": "'"${GRADE}"'"
#     }
#   }'

echo
