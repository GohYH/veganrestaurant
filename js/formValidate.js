//----------------------- reset form when reset button is pressed-----------

function resetForm(){
    $('form :input').val('');
    // set the property of radio button to false so it'll be unchecked
    var radioButton = $('input[type=radio]');
    radioButton.prop('checked', false);
}

function formValidate(event){
    event.preventDefault;
   
}


// $("#validationCustom02").on('input', function(){
//     var regex =/[^0-9]/g;
//     if($(this).val().match(regex))
//     {
//         $(this).val($(this).val().replace(regex, ""));
//         alert("Allow number only");
//     }

// });


  // Color theme for html content color
// local storage to store theme color name, so the setting will be saved

if (window.localStorage){

    let theme = localStorage.getItem('theme');
    
        if(theme == null){
            setTheme('blue')
        } else {
            setTheme(theme)
        }
}

// index.html class:theme-dot, upon click by user trigger an event to set the color mode, it gets pass to call the function setTheme
let themeDot = document.getElementsByClassName("theme-dot");

    for(var i = 0; themeDot.length>i; i++){
        themeDot[i].addEventListener('click', function(){
            let mode = this.dataset.mode
            console.log('option clicked: ' , mode)
            setTheme(mode)

        })
    }

    // setTheme function select the id of link stylesheet & change its attribute so the color change get applied to the html page content
    function setTheme(mode){

        if(mode == "blue"){
           var el = document.getElementById("theme-style")
           el.setAttribute("href", "css/blue.css");   
      }
        
        if(mode == "red"){
           var el = document.getElementById("theme-style")
           el.setAttribute("href", "css/red.css");
        }

        if(mode == "purple"){
            var el = document.getElementById("theme-style")
            el.setAttribute("href", "css/purple.css");

        }
        if (mode == "brown"){
            var el = document.getElementById("theme-style")
            el.setAttribute("href", "css/brown.css");
        }
        // set the item in local storage so the same setting get loaded when user revisit the html page
        localStorage.setItem('theme', mode);
    }

// ---------------------Color theme for html content color ------------END---------------------------------
