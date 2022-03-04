# Frontend - SpaceX Launches

<img src="https://www.spacex.com/static/images/share.jpg" align="right"
     alt="Space X By https://www.spacex.com/" width="120" height="178">

* This project is a simple React application that should display some data from the SpaceX API (https://docs.spacexdata.com/)

* The styling was made without any previous template.

## The challenge

1. List all SpaceX Launches
    * The list should show two kind of launches: Past Launches and Upcoming Launches
    * By default, the list should display only four launches. It should display more items when the user scroll down, 4 at a time.
    * Each list should display, at last:
      * The launch number
      * The mission name and year
      * The mission success
      * The name of the rocked used in the launch
      * An image
2. Create list filters
    * Create the follow list filters:
      * Show the launches that took place before or after a date defined by the user
      * Show the succeeded/failed launches
      * Show the only past/upcoming launches
    * It should be possible to combine the filters and so, filtering the list will all them at the same time.
3. Create favourites
    * Add the possibility to add a launch to the user favourites.

## Used tools

1. [Vite](https://vitejs.dev/)
2. [ReactJS](https://reactjs.org/)
3. [Typescript](https://www.typescriptlang.org/)
4. [Styled-Components](https://styled-components.com/)
5. [React-Router-Dom@v6](https://reactrouter.com/docs/en/v6/getting-started/overview)
6. [Testing Library](https://testing-library.com/)
7. [Jest](https://jestjs.io/)

## How to run

Fist just clone or download this project and open the folder in terminal.

* If you already have node installed in your personal computer just run the follow commands:
  ```
    npm install
    npm run build
    npm run start
  ```

* If you prefer, you can use yarn to run:
  ```
    yarn
    yarn build
    yarn start
  ```
  
After this, in the terminal will be shown the url for access the project, like the follow example:

![image](https://user-images.githubusercontent.com/94840399/156677683-35fb4358-a372-4380-8778-1b8facbad505.png)

Just copy the url and paste in your browser.

## How it works

* The follow page will be shown to you:

![image](https://user-images.githubusercontent.com/94840399/156677855-0e5e5743-559b-47c6-b4d7-c642ffa8d750.png)

* In your left side you can see the filters:

![image](https://user-images.githubusercontent.com/94840399/156678162-20d047fa-bc01-414e-b039-fabb602dcb7d.png)

  1. Is used to filter the launches by Date
      * In the first field you can select if you want to filter by launches with date **before** or **after** the next date
  2. Is used to filter the launches by result status (**Success** or **Failed**)
  3. Is used to filter the launches by type (**Past*** or **Upcoming**)

```
  If you run the filters and it doesn't bring any result, the message: "There aren't any cards to show" will be showen to you.
``` 	

* In the next column you can see the launches. If you want to see more, you just need to scroll down and it will be loaded.
    * The card inside the column show the required information:
        
        * ![image](https://user-images.githubusercontent.com/94840399/156679272-451c8904-c51a-4cf2-9ba5-2acd4f94fcf5.png)
    
    * If you wanto to add to favourite or see more information from this card, just put the pointer in front of the card
        
        * ![image](https://user-images.githubusercontent.com/94840399/156679551-f502297c-bf6c-4872-9fa7-1b43ba1832b9.png)

* In the next column will be shown the launches that you add to your favourites.
    * If you want to remove the cards from favourites, you can put the pointer in front of the card and click on the option "**Remove from Favourite**"
    
        * ![image](https://user-images.githubusercontent.com/94840399/156679776-58b4b9f6-29f9-4f02-b8b4-4b9c9d16d5d1.png)



  
