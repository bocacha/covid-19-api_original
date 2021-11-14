# COVID-19 SPA

![BANNER](https://user-images.githubusercontent.com/82456534/141678347-b4b7e6ec-1bd0-4880-acb0-4dab2a585a3e.png)

This project was builded for NicaSource to provide a simple and easy to use API for the COVID-19 data.

It is a single page application (SPA) that uses the [React](https://reactjs.org/) framework, rendering in the landing page an Material UI DataGrid component, wich allow the user to search for a country and get the data of the country.
The Grid consist of the following columns:

*   Continent
*   Country
*   Population
*   Cases
*   Deaths

![GRID](https://user-images.githubusercontent.com/82456534/141678358-8101a36b-1265-4fcb-8c64-f7e233b19b77.png)


Showing 10 results per page.If the user wants to see more results, he can click on the " > " button.

Users can navigate for further data on specific countries by visit the "Details" page, showing selectors for:

*   Continents
*   Countries


![PICK](https://user-images.githubusercontent.com/82456534/141678368-0952926d-8104-40b1-a8cf-073d08634616.png)

Once the User selects a continent and a country, the data will be shown after it Clicks on "Show me" button.
The selected Country will be loaded in a card showing the following information:

*   Continent
*   Country
*   Population
*   Cases
*   Deaths
*   Recovered
*   Active
*   Critical
*   Tests
*   Date


![CARDS](https://user-images.githubusercontent.com/82456534/141678371-8084c821-f8fb-4633-afb6-deb4b2c533ea.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



