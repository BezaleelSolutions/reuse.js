# Reuse.js - Modular HTML & SPA Support

## Overview
This plugin allows developers to create modular HTML templates by splitting the head, header, and footer sections into separate files (`head.html`, `header.html`, and `footer.html`). The main HTML file references these sections, and a JavaScript file (`reuse.js`) dynamically loads the content into the appropriate sections of the page. This approach eliminates the need for server-side languages like PHP to include these common elements, simplifying the development process.

Additionally, this plugin supports **Single Page Applications (SPA)**, allowing navigation between different pages without a full page reload. Developers need to initialize some configurations, and `reuse.js` handles the rest automatically.

## Key Benefits

- **Modularity**: Separate files for head, header, and footer elements.
- **DRY Principle**: Avoids repetition of common HTML structures.
- **Easy Maintenance**: Update one file to reflect changes across multiple pages.
- **SEO Friendly**: Ensures proper head elements are included for each page.
- **Improved Navigation**: Uses the History API for seamless navigation without full page reloads.
- **No Server-Side Language Required**: Achieves functionality traditionally handled by PHP using pure HTML and JavaScript.
- **SPA Support**: Enables Single Page Application functionality, a modern web application necessity.
- **Lazy Loading Support**: Improves performance by loading images dynamically.
- **Retry Mechanism**: Ensures failed requests are retried with exponential backoff.

## Structure

### HTML Structure for Template Creation
The main HTML file should be structured as follows:

```html
<!DOCTYPE html>
<html>
<head id="app-head"> <!-- FOR SEO AND OTHER STUFF -->
</head>
<body>
    <div id="app-header"> <!-- FOR APP HEADER REFRENCE. HEADER CONTENT WILL BE AUTOPOPULATED HERE BY APP.JS -->
    </div>
    <div id="app-content"> <!-- ALL OF THE CONTENT FOR THE CURRENT PAGE WILL GO HERE -->
    </div>
    <!-- Footer -->
    <div id="app-footer"> <!-- FOOTER CONTENT WILL BE AUTOPOPULATED BY APP.JS -->
    </div>
    <script src="reuse.js"></script>
</body>
</html>
```

## JavaScript (`reuse.js`)

The JavaScript file dynamically loads content from `head.html`, `header.html`, and `footer.html` into the respective sections of the page. Additionally, it handles navigation, history management, lazy loading, and request retries.

## Usage

### 1. Create the Template Files

- `head.html`: Contains the head elements (meta tags, title, links to CSS files).
- `header.html`: Contains the header elements (navigation bar, logo).
- `footer.html`: Contains the footer elements (contact information, links).

### 2. Reference the JavaScript File
Include the `reuse.js` file in your main HTML file as shown in the structure above.

### 3. Add Content to the Main HTML File
Ensure your main HTML file has empty `<div>` elements with IDs `app-head`, `app-header`, `app-content`, and `app-footer`.

### 4. Enable Navigation
Add the class `app-link` to anchor tags (`<a>`) for dynamic content loading:

```html
<a href="https://beatqueue.co/reusejs/product.html" class="app-link">Page 1</a>
```

### 5. Ensure Correct File Paths
Verify that `head.html`, `header.html`, `footer.html`, and any content files are in the same directory as your main HTML file.

### 6. Run Your Application
Open the main HTML file in a web browser to see dynamic loading in action. The `head`, `header`, and `footer` sections will be populated automatically, and clicking navigation links will update the content without a full page reload.

## Features

- **Dynamic Content Loading**: Automatically loads `head`, `header`, and `footer` content without duplication.
- **History Management**: Uses the browser's History API for seamless navigation.
- **SEO Friendly**: Ensures correct head elements are included for each page.
- **Lazy Loading**: Improves performance by loading images dynamically using `IntersectionObserver`.
- **Retry Mechanism**: Failed requests retry with exponential backoff for reliability.

## Example

With this setup, developers can create modular templates without manually including common sections in every HTML file. The JavaScript file dynamically loads and updates content.

## Tested HTML Template
A working example can be found here: [Live Demo](https://beatqueue.co/reusejs)

