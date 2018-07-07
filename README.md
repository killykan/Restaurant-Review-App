#An Offline First app / responsive and A11y focused

This app is a restaurants reviews project, built to be fully responsive on major devices. It also respects major rules of accessibility to make it useable for screen reader. Finally, a Service Worker has been implemented for creating a seamless offline experience for users.

## How can I start the project?

first make sure the check the version of pyhton, to see if you have it installed :

In your shell --> `python -V` or if you use git bash --> `py -v`;

if you do not have it install, refer to Python's [website](https://www.python.org/) to download and install the software.

Then spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`.
	
nb : with git bash launch the server by using `py -m http.server 8000`
	
Open your browser and visit `http://localhost:8000`

## WHat can I find in this project?

This project responds to three major elements in FEND web-development :

# Responsivness :
This web app is fully responsive in major devices such a mobile, tablets and desktops.

No framework such as Bootstrap have been used as required. The app is made responsive using current flow of the document and the properties of Flexbox, and the use of media queries.

# Accessibility :
This app is a11y focused, to be easily used by screen reader. 
It respects html 5 semantics and all tags have correct attributes for accesibility.
Moreover, the colors and the focused elements used in this web page have high contrast.

# Offline first :
To provide a full experience to the users, a Service Worker has been implemented, to control the flow of the requests, so that the informations desplayed on the page can be accessible even when offline.



NB: Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information. 

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code.



