# backend

# Heroku Link
https://weightlifting-journal.herokuapp.com/

| Method | Endpoint            | Description                                                                           |
|--------|---------------------|---------------------------------------------------------------------------------------|
| GET    | /                   | Initial GET Request to check server connection                                        |
| POST   | /auth/register      | Register new user, requires Username and Password                                     |
| POST   | /auth/login         | Login for existing user, requires Username and Password                               |
| GET    | /user/:id/          | Display information about user based on their user_id                                 |
| PUT    | /user/:id/          | Change information about user based on their user_id                                  |
| GET    | /exercises          | Display all exercises in the database                                                 |
| GET    | /exercises/:id/     | Display an exercise based on its id                                                   |
| GET    | /user/:id/exercises | Display all exercises for a user based on their user_id                               |
| POST   | /exercises/         | Add an exercise, requires name, user_id, body_region, amount_lifted, reps, sets, date |
| PUT    | /exercises/:id/     | Change information about an exercise based on its id                                  |
| DEL    | /exercises/:id/     | Delete an exercise based on its id                                                    |