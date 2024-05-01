'use strict' //stricting parsing and error handling like misspelled variables

const switcher = document.querySelector('.btn'); //selects the HTML element with the class name `btn` 

//click event
switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className; //retrieving the classname
    if(className == "light-theme") { // if it is equal
        this.textContent = "Dark";
    } else {``
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});