# BugerEats e2e tests

## **Automated testing**
- This project aims to automate e2e tests in order to facilitate the validation of items.

![alt text](https://user-images.githubusercontent.com/77681511/173639219-b9541b2c-2049-47e6-959e-308d93c720b1.png)

## **Techs used**

![JavaScript](https://img.shields.io/badge/-Javascript-yellow) ![Cypress](https://img.shields.io/badge/-Cypress-white)

## **Prerequisites**

- Have the node and cypress installed on the machine
- Installation link (https://docs.cypress.io/guides/getting-started/installing-cypress.html#Direct-download)
- Clone the project on your preference directory and run ```npm install```

## **Structure**
* Cypress
     * Fixtures(Folder with default cypress file)
     * e2e(Folder with feature directories)
     * Screenshots(Folder where screenshots of the tests execution are stored)
     * Support(Folder with command files for nps-raimundo-api API)
     * Videos(Folder where videos of the tests execution are stored)
     * node_modules(Dowloaded automatically on npm install)

## **How to run**

- Open the terminal service
- Access the directory and run the tests with the command below:
   
   * Use the command ```npx cypress run``` for complete execution
   * Use the command ```npx cypress open``` to open the execution window and select the cases to be executed