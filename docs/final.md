# I AM SPEED - PG County Speed Camera Locator

Team Members
- Amaan Mubeen, Michael Mirabello, Tinuologo Ojoibukun, Kevin Duong, Shervin Razazi.

Link
- https://iamspeed.herokuapp.com/

Information Problem
- There are several speed cameras surrounding the UMD campus and PG County in particular. Many commuters, like ourselves, have “fallen victim” to at least one hidden speed camera on our way to/from campus. Our target system would resolve the information problem by informing commuters driving through the area beforehand of where the speed traps are, cutting back on the chance of getting a ticket.

Stakeholders - UMD Commuters

Data We Worked With
- API: List of Speed Cameras in PG County https://data.princegeorgescountymd.gov/Community/Speed-Cameras/mnkf-cu5c

Chosen Strategies and Solutions
- Our main strategy for solving the problem is to create a map with popups of every speed camera located in PG County. Each popup can be clicked on and when selected, they display the address of the speed camera and the posted speed limit. We also have a heatmap as a visual aid to show concentrations of cameras in certain areas. We felt this was crucial because it provided a unique service not available from other services such as Google Maps or Waze. 

Technical System Rationale
- We had to make a couple of technical system decisions. We decided to go with leaflet.js to plot the coordinates for our map since it required minimal coding and was built to work on both desktop and mobile. Although there were other Map UI options, for our needs, we felt that leaflet.js was the optimal choice. Additionally, we sifted through a plethora of heatmap libraries in order to find one that worked best for us. Eventually, we decided to go with leaflet.heat. For one, it, like leaflet.js, had simple coding involved. It was also written by the same author as leaflet.js so there was immediate compatibility. We suffered compatibility issues with other heatmap libraries. 

The System Addresses the Problem
- We believe that our system does address the problem because the information needed to reduce the possibility of getting a ticket is available on our application. However, we can not be certain of the success of our application up until we see the data which shows a decrease in revenue received from speed camera tickets located in PG County.

Challenges Faced and Impact on the Final Design
- Due to some difficulties with communication, the styling for the site was not up to our standards by the presentation date. This caused members to spread themselves in order to make up for lost time. If we anticipated this from the beginning we would have put more human resources and time into developing a more appealing CSS. As a result, makeup work had to be spent into the deliverables as well, leading to yet again an unappealing final result. 

Possible Future Work
- Potential possible future work involves not only having the location of speed cameras, but also the location of red light cameras and stationed police vehicles. If our goal is to reduce the likelihood of UMD students getting a ticket, then having the aforementioned locations in addition to the speed cameras would be of great value to them.
- Vastly revamping the design and style of the website is essential. Although we were satisfied with our functionality, we are completely unhappy with our styling. 
