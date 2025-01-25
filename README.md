# Zaikadham
/*Header-
    -Logo
    -Nav Item
Body
    -Search Bar
    -RestoContainer
        -Resto Cards horizontally and vertically
        -image, name, rating, cuisine, deliveryTime
Footer
    -Links
    -copyright
    -contacts

*/

# Redux Toolkit

    # install redux toolkit
    install @reduxjs/toolkit & react-redux
    Build our Store
    Connect Store to App
    Create a cart slice
    dispatch an Action -> runs functrion
    Read the Data (Selector)

# types of Developer testing

    - Manual Testing
    - Unit Testing
    - Integration Testing
    
# Setting Up Testing Env

    - Install React Testing Library npm i -D @testing-library/react
    -install Jsest npm i -D jest
    - Install Babel Dependency npm install -D babel-jest @babel/core @babel/preset-env(from Jest Website)
    - Create babel.config.json in Root Directory and configure module.exports = {
                                                        presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
                                                        };
    - Config .parcelrc file to disable default Babel transpilation
    - Jest Configuration npx jest --init
    - Install jsdom Library - npm i -D jest-environment-jsdom

