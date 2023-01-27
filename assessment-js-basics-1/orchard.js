///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the
    last week at an apple orchard. You will be
    using your coding skills to gain insights
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in
    this file.

    The indexes of the arrays correspond with a
    day of the week. The associated number value
    represents the number of acres that were picked
    that day.

    The first array is named fujiAcres. Notice
    that the first item in this array is 2,
    meaning that 2 acres of Fuji apples were
    picked on Monday of this week.

    The prices are per pound and are written
    in cents.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// function totalAcres(array) {
// let sum = 0;
// for (const item of array) {
//     sum += item;
// }
// console.log(sum);
// return sum;
// }

// totalAcres([2, 3, 3, 2, 2, 2, 1]);
// totalAcres([5, 2, 4, 3, 6, 2, 4]);
// totalAcres([1, 5, 4, 2, 1, 5, 4]);

function totalAcres(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum)
    return sum
}

totalAcres([2, 3, 3, 2, 2, 2, 1, 5, 2, 4, 3, 6, 2, 4, 1, 5, 4, 2, 1, 5, 4]);



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average
    number of acres picked per day.

    Save the answer to a variable called
    `averageDailyAcres`.

    Log `averageDailyAcres` to the console.
*/

let averageDailyAcres = (63 / 21)
console.log(averageDailyAcres)





// PROBLEM 3

/*
    We have provided 2 variables below.

    The `acresLeft` variable is the number
    of acres that still have apples left.

    The `days` variable represents how
    many more days of work are left. It's
    initialized at 0 because we're going
    to be using it as a counter.

    Write a while loop that will continue to run
    while `acresLeft` is above 0.

    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using
    any Math methods.

*/

let acresLeft = 174
let days = 0

while (acresLeft > 0 && days >= 0) {
console.log("Day:"  + days)
acresLeft -= 3
days +=1
}


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples
    picked, in tons, for each variety.

    Each acre yields 6.5 tons of apples.

    Use the variables below to store
    your new arrays. Make sure that you
    don't modify the original arrays
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method
    to make copies of the arrays and
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new
    values to the new arrays.
*/

for (let i = 0; i < fujiAcres.length; i++) {
    fujiAcres[i] *= 6.5
}
console.log(fujiAcres)

for (let i = 0; i < galaAcres.length; i++) {
    galaAcres[i] *= 6.5
}
console.log(galaAcres)

for (let i = 0; i < pinkAcres.length; i++) {
    pinkAcres[i] *= 6.5
}
console.log(pinkAcres)

let fujiTons = [13, 19.5, 19.5, 13, 13, 13, 6.5]
let galaTons = [32.5, 13, 26, 19.5, 39, 13, 26]
let pinkTons = [6.5, 32.5, 26, 13, 6.5, 32.5, 26]

// PROBLEM 5

/*
    Next, calculate the total number of
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number
    into pounds -- store that number in
    the variables given below.

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

for (let i=0; i < fujiTons.length; i++) {
    fujiTons[i] *=2000
}
console.log(fujiTons)

for (let i=0; i < galaTons.length; i++) {
    galaTons[i] *=2000
}
console.log(galaTons)

for (let i=0; i < pinkTons.length; i++) {
    pinkTons[i] *=2000
}
console.log(pinkTons)

let fujiPounds = [26000, 39000, 39000, 26000, 26000, 26000, 13000]
let galaPounds = [65000, 26000, 52000, 39000, 78000, 26000, 52000]
let pinkPounds = [13000, 65000, 52000, 26000, 13000, 65000, 52000]


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given
    at the beginning of this file to
    figure out how much you'll make
    from selling each type of apple.

    The prices are per pound and are
    written in cents.

    Log each of the profits to the
    console.
*/

for (let i=0; i < fujiPounds.length; i++) {
    fujiPounds[i] *=fujiPrice
}
console.log(fujiPounds)

for (let i=0; i < galaPounds.length; i++) {
    galaPounds[i] *=galaPrice
}
console.log(galaPounds)

for (let i=0; i < pinkPounds.length; i++) {
    pinkPounds[i] *=pinkPrice
}
console.log(pinkPounds)

let fujiProfit = [23140, 34710, 34710, 23140, 23140, 23140, 11570]
let galaProfit = [41600, 16640, 33280, 24960, 49920, 16640, 33280]
let pinkProfit = [7150, 35750, 28600, 14300, 7150, 35750, 28600]


// PROBLEM 7

/*
    Add up all your profits and save
    the number to a variable called
    `totalProfit`.

    Log `totalProfit` to the console.
*/

let result1 = fujiProfit.reduce(function(a, b){
    return a + b;
});
console.log(result1);

let result2 = galaProfit.reduce(function(a, b){
    return a + b;
});
console.log(result2);

let result3 = pinkProfit.reduce(function(a, b){
    return a + b;
});
console.log(result3);

let totalProfit = result1 + result2 + result3
console.log(totalProfit)
