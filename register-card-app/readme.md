# Register Credit Card Application

This project includes two parts, which are client (Front End) and server (Proxy) respectively. 

All **Front End Code required in the assessment is in client foler**. It is all finished.

The intention of proxy is to protect credentials or secrets that are able to get the access to Backend API service. However, this is yet to be finished. 

# Requirement
## Run Front End Only
- Node.js

## Run within Docker Compose
- Docker

# Run Test (client/Frond End only)

```bash
yarn test
```

# Run the project

## Run Front End Only

```bash
cd client
yarn start
```

Then access http://localhost:3000

## Run within Docker Compose

```bash
./run.sh
```

Then access http://localhost:3000

# Functionalities 

- [x] Responsive
- [x] Pages switching
- [x] Register card from
  - [x] Styling Fields
  - [x] Validation of Fields on submit
  - [x] console log the valid input values 
- [x] Menu page
  - [x] Show page content

# To be continue

- Integration with Back End API service