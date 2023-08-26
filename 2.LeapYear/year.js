// function that determines whether a given year is a leap year or not.

function leap(year) {
    console.log("the entered number is \n");
    console.log(year)
    if (year % 4 == 0 && year % 400 == 0 || year % 100 != 0) {
        console.log("Leap Year");
    }
    else {
        console.log("The entered number is not a leap year");
    }
}

leap(2000);
leap(2001);
leap(2020);
