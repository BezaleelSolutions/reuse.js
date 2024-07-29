
## Overview
This plugin allows developers to create modular HTML templates by splitting the head, header, and footer sections into separate files (head.html, header.html, and footer.html). The main HTML file will reference these sections, and a JavaScript file (reuse.js) will dynamically load the content into the appropriate sections of the page. This approach eliminates the need for server-side languages like PHP to include these common elements, simplifying the development process.

Second the plugin is also used for SPA ( Single page Applications ) , means without page refresh different pages can be viewed in same page structure. Developers need to initialize some configurations after loading  and it will do the magic for you. 
## Key Benefits
1.	Modularity: Separate files for head, header, and footer elements.
2.	DRY Principle: Avoids repetition of common HTML structures.
3.	Easy Maintenance: Update one file to reflect changes across multiple pages.
4.	SEO Friendly: Ensures proper head elements are included for each page.
5.	Improved Navigation: Uses the History API for seamless navigation without full page reloads.
6.	No Server-Side Language Required: Achieves functionality traditionally handled by PHP using pure HTML and JavaScript.
7.	No Full Page Refresh: This can be used also for page update without full page refresh. That is a need of modern web applications.

## Structure
HTML Structure For template creation
The main HTML file should be structured as follows:

` <!DOCTYPE html> `
` <html> `
` <head id="app-head"> <!--FOR SEO AND OTHER STUFF--> `

` </head> `
` <body> `
   
` <div id="app-header"> <!--FOR APP HEADER REFRENCE. HEADER CONTENT WILL BE AUTOPOPULATED HERE BY APP.JS--> `

` </div> `

` <div id="app-content"> <!--ALL OF THE CONTENT FOR THE CURRENT PAGE WILL GO HERE--> `

` </div> `
 ` <!--  footer --> `
` <div id="app-footer"> <!--FOOTER CONTENT WILL BE AUTOPOPULATED BY APP.JS --> `

` </div> `

` <script src="reuse.js"></script> `
  
` </body> `
` </html> `
 
## JavaScript (reuse.js)
The JavaScript file dynamically loads the content from the head.html, header.html, and footer.html files into the respective sections of the page. Additionally, it handles navigation and history management.


## Usage

1.	Create the Template Files:
o	head.html: This file should contain the head elements for the page (e.g., meta tags, title, links to CSS files).
o	header.html: This file should contain the header elements (e.g., navigation bar, logo).
o	footer.html: This file should contain the footer elements (e.g., contact information, links).

2.	Reference the JavaScript File:
o	Include the reuse.js file in your main HTML file, as shown in the structure above.

3.	Add Content to Main HTML File:
o	The main HTML file should have empty div elements with IDs app-head, app-header, app-content, and app-footer.

4.	Navigation:
o	Add the class app-link to anchor tags (<a>) that you want to handle with the dynamic content loader. Ensure the href attribute points to the desired content URL.
<a href="https://beatqueue.co/reusejs/product.html" class="app-link"> Page 1</a>

5.	Ensure Correct File Paths:
 Verify that the head.html, header.html, footer.html, and any content files are in the same directory to your main HTML file.

6.	Run Your Application:
Open the main HTML file in a web browser to see the dynamic loading in action by running xampp. The head, header, and footer sections will be populated automatically, and clicking on navigation links will load content dynamically without full page reloads.


## Features
•	Dynamic Content Loading: 
Automatically loads the head, header, and footer content into the main HTML file without the need to duplicate code across multiple files.
•	History Management: 
Utilizes the browser's history API to manage navigation and allow for back and forward navigation without full page reloads.
•	SEO Friendly: 
Ensures that the head section can be populated with SEO-related content.

## Example
 

With this setup, developers can focus on creating individual pieces of the template (head, header, footer) without worrying about including these sections in every single HTML page. The JavaScript file handles loading and updating the content dynamically.



## Tested HTML Template
Here is the url for html template using reuse.js
https://beatqueue.co/reusejs

 
