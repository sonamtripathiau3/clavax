# clavax

*** If nothing opens on `localhost:3000` please check, `localhost:3000/` ***


# cd frontend
Run this command to go to frontend folder

# npm install
Run this command to install the frontend dependencies

# cd backend
Run this command to go to backend folder

# npm install
Run this command to install the backend dependencies

# npm run dev
Run this command(in server folder) to run backend and frontend concurrently (Make sure you have nodemon installed for this command)


 # Deployment
1. check if the folder you are working has git repository initialized or not. if not do `git init -y`
2. `git add .` and `git commit -m <msg>` add and commit your files.
3. now do, `heroku create <app-name>` , this creates an app with provided app-name.
4. `git remote -v` do this to check if remote named heroku has been set or not.
5. `git push heroku <your-branch-name>:master` this deployes your app to heroku. 