## Inventory App

This is a simple inventory app that relies on the use of Express/MongoDB to make a proper use of CRUD and the Model View Controller structure(MVC) where on the backend we separate the model(Schemas) from the controllers(Routes) and then the view is written on React where i handle all the **paths** so the user won't be able to access to the API, just the dev.

## Should have!
This will be the frontend of the MarketApp where the user should be able to see and navigate to certain points:

* Navbar should have HOME/PRODUCTS/BRANDS/ADD PHONE/ABOUT
* Navbar must be responsive
* On "Home" you should see how many PHONES/BRANDS/CURRENT_PATH
* On "Brands" you should see the brands and their models available on the shop, on click you should be redirected to the list of phones that matches that brand
* On "Add Phone" you should be able to add a phone with an image from your folder or link it.
* On "About" you should welcome to the Phones Inventory and explain it.
* ONLY USERS WITH THE SECRET PASSWORD SHOULD BE ABLE TO DELETE AND UPDATE


*** REMEMBER TO USEPARAMS TO FIND OBJECTS BY ID