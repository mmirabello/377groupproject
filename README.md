# 377 Group Project
I Am Speed - PG Speed Camera Locator

Description: This website and application aims to help residents of PG and UMD students identify the locations of speed cameras in the county. We use data from Prince George's County's database to put markers on a map, and use heatmaps as a visual aid to show concentrations of cameras in certain areas.

Heroku Link: https://iamspeed.herokuapp.com/

Target Browsers: The PG Speed Camera Locator was designed to be compatible with Google Chrome and iOS.

User Manual Link: https://github.com/mmirabello/377groupproject/blob/master/docs/user.md

Developer Manual: https://github.com/mmirabello/377groupproject/blob/master/README.md#developer-manual

# Developer Manual

To run our application on your personal device, please follow these steps:
- Clone our repository onto your personal device.
- Open your terminal.
- Navigate through the terminal to the folder where our repository is located.
- In the terminal run the code: npm install.
- Once completed, run the code: npm start.
- Go to your browser of choice and put in the URL http://localhost:3000/

## API Endpoints
**TYPE**: GET

**URL**: /api

**RESPONSE**: An Array of Objects

**EXAMPLE**:

``` 
  [
    '4500 blk Ammendale Road, Beltsville, MD',
    '39.03525200',
    '-76.91856900',
    '35'
  ],
  [
    '1700 blk Iverson Street, Oxon Hill, MD',
    '38.80328000',
    '-76.99046000',
    '25'
  ],...
  
```
## Future Road-Map
A road map for future development involves not only having the location of speed cameras, but also the location of red light cameras and stationed police vehicles. Another possible addition is the location of government buildings such as police stations, fire departments and libraries. Another possible addition would be to have our website linked to a server on MySQL in order to have a truly data driven application. If we had this, we could have a web form that also allowed us to track which specific cameras gave the most tickets. This would allow our users to see which cameras to avoid the most. This could help lower how many tickets our users get.

## Known Bugs
- Help Form does not send information anywhere
