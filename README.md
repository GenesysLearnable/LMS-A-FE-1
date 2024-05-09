# LMS platform for Adults

This platform is built by Group 1 of the Learnable23 internship program

### Project use (Frontend devs)

Starting the project

- Step 1: Copy the link and clone the repo in your local system

- Step 2: Run `npm i` on the terminal to install dependencies
- Step 3: Run `npm run dev` to start project

Using the project

After you have cloned the repo checkout to branch develop2.0
- To checkout to branch run
  ```
  git checkout develop2.0
  ```
hi
Branch develop2.0 is our development branch. To work on any project, checkout from branch develop2.0 to a new branch

e.g. git checkout -b feat-dashboard

the new branch will be named after the feature you want to work on

### IMPORTANT

When you are done working

- Step 1: Push your work to git by running

  ```
  git add .
  ```

  ```
  git commit -m "commit message"
  ```

- Step 2: checkout to branch develop2.0
- Step 3: Pull the work from origin to develop2.0
  ```
  git pull origin develop2.0
  ```
- Step 4: Checkout to your feature branch
- Step 5: Merge feature branch to feature branch
  ```
  git merge develop2.0
  ```
- Step 6: Push the work to github
- Step 7: Open pull request for your work

### DO NOT !

1. Merge your pull requests with any branch, only the team lead and I (Chimere) will merge the branches
2. Do not ever push to develop, do not push to develop2.0, only push to your branch
3. Touch or edit anybodys code unless the person knows about it to avoid conflicts.

### Technologies Used

Reactjs + Vite
Tailwind css

### Project Structure

- The Public folder

- The src folder: The src folder contains

  - The pages file where all platform pages will be stored
  - The components folder where the components will be stored
  - App.jsx this is where the routing of the pages will be done

- index.css for the global styles (tailwind utils)
- main.jsx this renders the app.jsx files
- the index.html file, config files and readme
