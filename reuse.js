function loadContent(url, element, isDefault, retryCount = 0) {
    return fetch(url)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.text();
      })
      .then(html => {
        document.getElementById(element).innerHTML = html;
        localStorage.setItem(`retry_${url}`, 0);
  
        // Save state (only for non-default pages)
        if (!isDefault) {
          saveState(url, element); // Updated call
        }
      })
      .catch(error => {
        if (retryCount < 3) {
          const delay = 1000 * Math.pow(2, retryCount);
          setTimeout(() => loadContent(url, element, isDefault, retryCount + 1), delay);
        } else {
          const fallback = localStorage.getItem(`cached_${url}`) || "<div>Error loading content. <button onclick='retryLoad()'>Retry</button></div>";
          document.getElementById(element).innerHTML = fallback;
        }
      });
  }
// Retry function for fallback content
function retryLoad() {
    loadContent(window.location.pathname, 'app-content', false);
  }
     
  if (typeof head !== "undefined") {
    loadContent(head, 'app-head', true);
  }
  if (typeof header !== "undefined") {
    loadContent(header, 'app-header', true);
  }
  if (typeof footer !== "undefined") {
    loadContent(footer, 'app-footer', true);
  }


  
document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to elements with the app-link class
    document.addEventListener("click", function(event) {
        // Check if the clicked element has the app-link class
        if (event.target.classList.contains("app-link")) {
            // Prevent the default behavior of the anchor tag
            event.preventDefault();
            
            // Get the value of the href attribute
            var hrefValue = event.target.getAttribute('href');
            
            // Call the loadContent function with the href value and target element ID
            loadContent(hrefValue, 'app-content', false);
        }
    });
});

// Automate src → data-src conversion
function convertImagesToLazy() {
    document.querySelectorAll("img[src]").forEach(img => {
      if (!img.hasAttribute("data-src")) {
        img.setAttribute("data-src", img.src);
        img.removeAttribute("src"); // Remove src to prevent immediate loading
      }
    });
  }
  
  // Run on initial load
  convertImagesToLazy();
  
  
// Overridden loadContent (fixed to return the promise)
const originalLoadContent = loadContent;
loadContent = (url, element, isDefault) => {
  return originalLoadContent(url, element, isDefault).then(() => {
    convertImagesToLazy(); // Convert new images
    observeLazyImages(); // Now accessible globally
  });
};

// Lazy loading setup
function observeLazyImages() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        }
      });
    }, { threshold: 0.5, rootMargin: "0px 0px 200px 0px" });
  
    document.querySelectorAll("img[data-src]").forEach(img => observer.observe(img));
  }
  
  // Initialize lazy loading on page load
  document.addEventListener("DOMContentLoaded", () => {
    observeLazyImages(); // Call globally defined function
  });

// Save state without compression
function saveState(url, elementId) {
    const content = document.getElementById(elementId).innerHTML;
    const state = { 
      url: url,          // Track the URL for navigation
      element: elementId,
      content: content,  // Raw HTML content
      forms: {}          // Add form data here if needed
    };
    window.history.pushState(state, "", url); // Store state directly
  }
  
  // Restore state from event.state
  function restoreState(state) {
    if (state && state.content) {
      document.getElementById(state.element).innerHTML = state.content;
      // Restore forms or other data here (e.g., state.forms)
    }
  }

  window.onpopstate = (event) => {
    if (event.state) {
      restoreState(event.state); // Pass the raw state object
    }
  };
