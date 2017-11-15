// Variable
var mm = 'window.matchMedia("(max-width: 480px)")';

// slideToggle function
function Sliding(clickElement,toggleElement,timer) {
  $(clickElement).off("click." + mm).on("click." + mm, function() {
    $(toggleElement).stop().slideToggle(timer);
  }); 
}

// fadeToggle function
function Fading(clickElement,toggleElement,timer) {
  $(clickElement).off("click." + mm).on("click." + mm, function() {
    $(toggleElement).stop().fadeToggle(timer);
  }); 
}

// Toggle function
function Toggling(clickElement,toggleElement,timer) {
  $(clickElement).off("click." + mm).on("click." + mm, function() {
    $(toggleElement).stop().toggle(timer);
  }); 
}

/* 
  Detection function for matchMedia
  Example with Parameter: 'window.matchMedia("(max-width: 480px)")'
*/
function screenHandling(mql) {
  if (mql.matches) {      
  	// if matchMedia "true", then call one of these function
    /*
        Examples:
        1.) Fading(clickElement,toggleElement,timer);
        2.) Sliding(clickElement,toggleElement,timer);
        3.) Toggling(clickElement,toggleElement,timer);
    */
  } else {     
  	// if matchMedia "false", then call an another one of these function
    /*
        Examples:
        1.) Fading(clickElement,toggleElement,timer);
        2.) Sliding(clickElement,toggleElement,timer);
        3.) Toggling(clickElement,toggleElement,timer);
    */
  }
}

// Handle media query event
screenHandling(mm);
mm.addListener(screenHandling);

// We can also define any other functions and bind it into "if" and "else" condition