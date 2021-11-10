# WelcometoKindred

My project is a template site that serves as an introduction to the fictional world of my story-verse "Kindred." The bulk of the constructed site is a fake store to buy magic-related items. The homepage has a clickable section to reveal special offers and discounts. The index page also displays information on the newest items added to the webstore. The website has a web form on a separate page where you can enter your information to be inducted into the coven.

Project requirements:

Media Queries: "Welcome to Kindred" has two media queries: one for tablets and one for desktop. When resized, the homepage (index.html) will start with a one column layout with a collapsed hamburger menu. The initial page without any queries is one column as it was designed using the mobile-first principle. As the page is expanded to tablet form, the top half of the page remains one column, while the "New Additions" section takes two columns. When fully expanded for a desktop screen, the "specials" and "new additions" sections are each in their own column, with the individual "new addition" divs stretching out to 2 or 3 columns depending on the device width.

CSS Features list:
1. Responsive navigation menu: for mobile screens, the menu collapses into a hamburger icon. When this icon is clicked, it reveals a vertical menu with navigation links to the other site pages. At tablet and larger, the navigation menu will stretch to fill the width of the screen while also maintaining spacing between the menu items. The font size also increases appropriately.

2. Flexbox: the majority of the site layout is set up using flexbox. Adjusting the flex direction from row to column for certain elements is crucial to the site's layout changes from mobile to tablet and desktop. For example, flexbox properties are responsible for the change in the layout of the homepage from one column for mobile to multiple columns for bigger screen widths.

Javascript Features List
3. Contact form, validation, and use of input: The "Join the Coven" page has a contact form inviting the website visitor to join the fictional group. One of the inputs in the form is "years of magic experience," which must be entered as a number. Using JavaScript, the user's input is validated to test whether it is a number or not. If the input is not a number, or no input is added into this field, the user will receive a message on the page telling them to input a valid number. If the input is validated to be a number, upon clicking the submit button a message appears on the webpage congratulating them for their years of experience (using their input for the number of years).

4. Show/hide content using JavaScript: the "Surprise special deals" section can be clicked to reveal store specials. When clicked, the initial "special deals" section will disappear, and a listing of the actual available specials appears instead. The hamburger menu button also shows the menu when clicked, and collapses the menu when clicked again. Both are accomplished using JavaScript.