
function loadContent(url,element,is_default_page) {
    fetch(url)
   .then(response => response.text())
   .then(html => {
       // Update the content of the target element
       document.getElementById(element).innerHTML = html;
       var nextURL = url;
       var nextTitle = 'My new page title';
       var nextState = document.documentElement.innerHTML;

       if(nextURL !== window.location.href)
       {
          // This will create a new entry in the browser's history, without reloading
          if(!is_default_page){ 
          window.history.pushState(nextState, nextTitle, nextURL);
          }
          // This will replace the current entry in the browser's history, without reloading
          //window.history.replaceState(nextState, nextTitle, nextURL);
       }
   })
   .catch(error => console.error("Error loading content:", error));
  }

     
loadContent(head,'app-head',true);
loadContent(header,'app-header',true);
loadContent(footer,'app-footer',true);


  
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


window.onpopstate = function(event) {
    var data = event.state;
    if (event.state !== null) {
        document.documentElement.innerHTML = data;
    }
};



        
     
        //document.addEventListener('DOMContentLoaded', function() {
            const menuLinks = document.querySelectorAll('.menu-area-main li');
            const currentUrl = window.location.pathname.split('/').pop(); // Get the current page file name

            // Highlight the active link based on the current URL
            menuLinks.forEach(li => {
                const link = li.querySelector('a');
                if (link && link.getAttribute('href') === currentUrl) {
                    li.classList.add('active');
                }
            });

            // Add click event listener to all menu items
            menuLinks.forEach(li => {
                li.addEventListener('click', function() {
                    // Remove 'active' class from all list items
                    menuLinks.forEach(item => item.classList.remove('active'));

                    // Add 'active' class to the clicked list item
                    this.classList.add('active');
                });
            });
        //});
       
    




     ////////////////////
    
      $(document).on('input','.onlytext', function(e) {
          old=$(this).data("old");
          this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z]{1,15}\s*)((\s+)([A-Za-z]{1,15})(\s+)*)*$/.test($(this).val())) {
           if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
    
      $(document).on('input','.textnumbersonly', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[a-zA-Z0-9\-]+$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     $(document).on('input','.phonenumber', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[0-9\s\+\(\)]+$/.test($(this).val())) { 
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
       $(document).on('input','.textnumberspaceonly', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9]{1,15}\s*)((\s+)([A-Za-z0-9]{1,15})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
          
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     
          $(document).on('input','.textnumbers', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9.\(\)\-\_\,]{1,20}\s*)((\s+)([A-Za-z0-9.\(\)\-\_\,]{1,20})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
          $(document).on('input','.textnumberemojii', function(e) {
         old=$(this).data("old");
         //this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^([A-Za-z0-9.\(\)\-\_\,\&\#\;]{1,15}\s*)((\s+)([A-Za-z0-9.\(\)\-\_\,\&\#\;]{1,15})(\s+)*)*$/.test($(this).val())) {
          if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
     
         $(document).on('input','.onlynumbers', function(e) {
         old=$(this).data("old");
         this.value=this.value.replace(/^\s+$/gm,'');
         if (!/^[0-9]+$/.test($(this).val())) {
           if($(this).val() !=="")
          {
            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });

    
        $(document).on('input','.decimal', function(e) {
      
         old=$(this).data("old");
         
         if (!/^\d{1,10}(\.\d{0,2})?$/.test($(this).val())) {

           if($(this).val() !=="")
          {

            $(this).val(old);
          }
        }
        else
        { 
          if($(this).val().length <= $(this).attr('maxlength'))
          {
            $(this).data("old",this.value);
          }
          else
          {
            $(this).val(old);
          }
          
        }
     });
      function max_value(ob,max_value) {
             
              if(ob.value > parseInt(max_value))
              {
                
                ob.value=max_value;
                
              }
            }









    //Use Strict Mode
(function($) {
  "use strict";

//Remove loading-wrapper class before window load
setTimeout(function(){
  $('.loading-wrapper').removeClass('loading-wrapper-hide');
  return false;
}, 10);

//Begin - Window Load
$(window).load(function(){

  //Page Loader 
  setTimeout(function(){
    $('#loader-name').addClass('loader-up');
    $('#loader-job').addClass('loader-up');
    $('#loader-animation').addClass('loader-up');
    return false;
  }, 500); 
  setTimeout(function(){
    $('#page-loader').addClass('loader-out');
    $('#intro-item1').addClass('active');
    return false;    
  }, 1100);  
  $('#page-loader').delay(1600).fadeOut(10);  
  setTimeout(function(){
    $('#page-loader').hide();
    return false;    
  }, 1700);

  //back to top
  function backToTop() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  }

  //Isotope
  var $isotopeContainer = $('#isotope-filter'),
  $isotopeOptionContainer = $('#options'),
  $options = $isotopeOptionContainer.find('a[href^="#"]').not('a[href="#"]'),
  isOptionLinkClicked = false;

  $isotopeContainer.imagesLoaded( function() {
    $isotopeContainer.isotope({
      itemSelector : '.element',
      resizable: false,
      //filter: '*',
      transitionDuration: '0.8s',
      layoutMode: 'packery',
      packery: {
        
      }
    });
  });

  function isotopeGO() {
      var isotopeItem = $(this),
      href = isotopeItem.attr('href');
        
      if ( isotopeItem.hasClass('selected') ) {
        return;
      } else {
        $options.removeClass('selected');
        isotopeItem.addClass('selected');
      }

      jQuery.bbq.pushState( '#' + href );
      isOptionLinkClicked = true;
      return false;
  }

  $options.on('click', function () {       
      isotopeGO();
  });

  $('.isotope-link').on('click', function () { 
      backToTop();
      isotopeGO();       
  });
  

  $(window).on( 'hashchange', function( event ){
    var isotopeFilter = window.location.hash.replace( /^#/, '');
    
    if( isotopeFilter == false )
      isotopeFilter = 'home';
      
    $isotopeContainer.imagesLoaded( function() {
      $isotopeContainer.isotope({
        filter: '.' + isotopeFilter
      });
    });
    
    if ( isOptionLinkClicked == false ){
      $options.removeClass('selected');
      $isotopeOptionContainer.find('a[href="#'+ isotopeFilter +'"]').addClass('selected');      
    }    
    
    isOptionLinkClicked = false;

  }).trigger('hashchange');


  $('.navbar-nav li a').on('click', function(){
    $('.navbar-nav li a').removeClass('activeMenu');
    $(this).addClass('activeMenu');
  });

  //Masonry Layout on Blog
  var $isotopeContainerBlog = $('#blog-posts-masonry')

  $isotopeContainerBlog.imagesLoaded( function() {
    $isotopeContainerBlog.isotope({
      itemSelector : '.blog-item',
      resizable: false,
      //filter: '*',
      transitionDuration: '0.8s',
      layoutMode: 'packery'
    });
  });  

});

//Begin - Document Ready
$(document).ready(function(){


// Double Tap to Go - Mobile Friendly SubMenus
$('.navbar-nav li:has(ul)').doubleTapToGo();

// Maps iframe Overlay
var map = $('#map');
map.on('click', function () {
    $('#map iframe').css("pointer-events", "auto");
    return false;
});

map.on('mouseleave', function () {
    $('#map iframe').css("pointer-events", "none");
    return false;
});

//Form Validator and Ajax Sender
$("#contactForm").validate({
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "php/contact-form.php",
      data: {
        "name": $("#contactForm #name").val(),
        "email": $("#contactForm #email").val(),
        "subject": $("#contactForm #subject").val(),
        "message": $("#contactForm #message").val()
      },
      dataType: "json",
      success: function (data) {
        if (data.response == "success") {
          $('#contactWait').hide();
          $("#contactSuccess").fadeIn(300).addClass('modal-show');
          $("#contactError").addClass("hidden");  
          $("#contactForm #name, #contactForm #email, #contactForm #subject, #contactForm #message")
            .val("")
            .blur();         
        } else {
          $('#contactWait').hide();
          $("#contactError").fadeIn(300).addClass('modal-show');
          $("#contactSuccess").addClass("hidden");
        }
      },
      beforeSend: function() {
        $('#contactWait').fadeIn(200);
      }
    });
  }
});


//Modal for Contact Form
$('.modal-wrap').click(function(){
  $('.modal-wrap').fadeOut(300);
}); 

//Modal for Forms
function hideModal() {
  $('.modal-wrap').fadeOut(300);
  return false;
}

$('.modal-wrap').on('click', function () {
  hideModal();
});   

$('.modal-bg').on('click', function () {
  hideModal();
}); 

//bootstrap tooltips
$('[data-toggle="tooltip"]').tooltip();

 //Nivo Lightbox
  $('a.nivobox').nivoLightbox({ effect: 'fade' });

//End - Document Ready
});

//End - Use Strict mode
})(jQuery);