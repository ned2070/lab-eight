
//getName() prompts for customer name and prints it at top of page //

function getName() {

let customer = prompt("What's your name?");

let reply = "Welcome, " + customer + "! ";

document.write(reply);

}


// getTime requests a time and selects a response //

function getTime() {

    let message;

    // askTime prompts for time //
    
    function askTime() {
    
        time = prompt("What hour is it? (24 hour clock please)");
    
        }

askTime();

    while (isNaN(time) || time<0 || time>24 ) {window.alert("Please give a number 0-24");
                
        askTime();
                  };


if (time < 8) { message = "We don't open until 8 o'clock, enjoy looking at our goods until then.";
    
} else if (time > 24) { message = "I don't recognise that time but we're open 8 am to 9 pm.";

} else if (time > 21) { message = "Sorry we closed at 9 o'clock, these wonderful products could have been yours.";

} else if (time <= 21) { message = "We're open! Spend to your heart's content!";

} else { message = "I don't recognise that time but we're open 8 am to 9 pm.";

}

window.alert(message);

}


// getStars() prompts for number of stars and prints them at bottom of page //

function getStars() {

    let stars = prompt("How many stars would you award our shop? (1-10)");

    while (isNaN(stars) || stars< 0 || stars > 10)  {
        stars = prompt("Please enter a number between 0 and 10!")}

    
    for ( let i =1; i<=stars; i++)
        {
            document.write("<img src='./star.jpg' alt='*' height='50'/>" + i)
        }
    
    }