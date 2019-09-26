                                //Overview of Scope

var globalVariable = 'Hi, everyone!';

function myFunction(){
    var localVariable = 'Only available inside this function(locally)';//This specific line of code cannot be accessed without using the function myFunction() if localVariable is below the function 
}

var localVariable();//this will not work because localVariable is below the function myFunction()

//next slide - a solution to the previous example - since var username is above function displayUsername(), the output will be hello, longjohnsilver42 - it worked
var username = 'longjohnsilver42';
 
function displayUsername(){
    alert('hello,' + username);
}

//next slide - if variable is inside function
function setUsername(){
    var username = 'jimh4wkins';
    username//we can access the username if we try to invoke variable from inside the current function
}
//if variable is invoked from outside the function from which the variable value is stored
function setUsername(){
    var username = 'jimh4wkins';
}

username//this will result in a message stating undefined - when js is looking for variables, it will look on the current line and 'walk up' functions to see if variable has been declared

                                //Rules of Scope
//we can look up, but NEVER down

var storeHours = '9am to 5pm';//global variable - this can only access the variable storeHours

function setEmployeeHours(hours){
    var setEmployeeHours = hours;//local variable - this can access the variables setEmployeeHours and storeHours - we can only look up when invoking variables
    
    function employeeLogin(){
        var employeeLogin = 'iwrkhere';//this can access all 3 variables - we can only look up when invoking variables
    }
}

storeHours;//will work because this is on the same level
setEmployeeHours;//will NOT WORK because this is going down - see examples using 'longjohnsilver42' and 'jimh4wkins' above
employeeLogin;//will NOT WORK because this is going down - see examples using 'longjohnsilver42' and 'jimh4wkins' above

//next slide
//function up to global scope
var favoriteColor = 'blue';

function changeFavoriteColor(){
    favoriteColor = 'red';
}

changeFavoriteColor();//if this function is not invoked, the calling of variable favoriteColor (below) will be 'blue' because it is called OUTSIDE of the function

favoriteColor//will result in 'red' because the function changeFavoriteColor(); was invoked 2 lines above

//next slide
//child scope to parent scope
function plantTree(){
    var tree = 'fir';

    function changeTree(){
        tree//will result in an output of 'fir'
    }
}

//change for example
function plantTree(){
    var tree = 'fir';

    function changeTree(){
        tree = 'oak';//changed value of tree from 'fir' to 'oak'
    }
    changeTree();
    tree//will result in the value of oak
}

//calling for variable tree OUTSIDE of parent function
function plantTree(){
    var tree = 'fir';

    function changeTree(){
        tree = 'oak';
    }
    changeTree();
}

tree//called for variable tree here (at the global level) and because it is defined BELOW the parent function in which the variable was created, it will output undefined
changeTree//same as above - variables and function names follow the exact same scope rules, can only look up, never down

//next slide
//sibling scopes - e.g. son and daughter below
function parentFunction(){
    var ourHouse = 'brick';
    hulaHoop

    function daughterFunction(){
        var hulaHoop = 'blue';
        crayons//inaccessable because we can NEVER go up OR SIDEWAYS (i.e. sibling scopes)
        ourHouse//will return 'brick'
    }

    function sonFunction(){
        var crayons = 64;
        hulaHoop//inaccessable because we can NEVER go up OR SIDEWAYS (i.e. sibling scopes)
        ourHouse//will return 'brick'
    }
}

                                //Lexical Scoping
//location, location, location
//local variables may sometimes take priority
var lunch = 'pizza'//global scope

function myLunch(){//parent function
    var lunch = 'filet mignon';
    lunch//this will result in 'filet mignon'
}

//calling lunch outside of the function instead
var lunch = 'pizza'//global scope

function myLunch(){//parent function
    var lunch = 'filet mignon';
}

myLunch()
lunch//this is differnt than the previous examples (line 49-57) because var was used.  This is making a new variable, not changing an existing one.
//Therefore, the output will be 'pizza' (global scope) because lunch is invoked at the global scope level

//next slide
//Scope is unaffected by Ifs and Fors
function overlord(){
    if(true){
        var peasant = 'lowly';
    }
    peasant//will output 'lowly'
    for(var i = 0; i < 5; i++){
        peasant = i;
    }
}

//move peasant invoke to another spot
function overlord(){
    if(true){
        var peasant = 'lowly';
    }
    
    for(var i = 0; i < 5; i++){
        peasant = i;
    }
    peasant//will output 4
}

//call for i instead of peasant in same spot
function overlord(){
    if(true){
        var peasant = 'lowly';
    }
    
    for(var i = 0; i < 5; i++){
        peasant = i;
    }
    i//will result in 5
}

//another example with another for loop nested within a for loop
function overlord(){
    if(true){
        var peasant = 'lowly';
    }
    
    for(var i = 0; i < 5; i++){
        peasant = i;
        for(var i = 0; i < 2; i++){//if you do this, it will result in a conflict, instead you should change the 2nd for loop's letter to something other than i (e.g. j) 

        }
    }
    
}

                                    // Scope - Let
//let allows us to break functional scope rules (lines 1-131) and applies block scope rules
//let is essentially a var statment BUT only applies for that block (i.e. only usable within the curly braces in which it is defined{block scoping})
//Example
if(true){
    let num = 12
    num//will result in 12
}
num//will result in undefined

for(let i = 0; i < 11; i++){

}
i//will result in undefined

//next slide
var array = [1, 2, 3];//will result in [1, 2, 3]
var size = array.length;//will result in 3
var string = 'hello';//will result in 'hello'

//applying if statement
var array = [1, 2, 3];
var size = array.length;
var string = 'hello';
if(string.length > 0){
    var size = string.length + 1;
}
//will change var size to 6 - oops

//adding on to last example
var array = [1, 2, 3];
var size = array.length;
var string = 'hello';
if(string.length > 0){
    var size = string.length + 1;
}
array.push(size);
//will change array from [1, 2, 3, 6]

//changing var to let
var array = [1, 2, 3];
var size = array.length;
var string = 'hello';
if(string.length > 0){
    let size = string.length + 1;
}
array.push(size);
//will result in [1, 2, 3, 3] because the let only applies that change in size within the if loop, array.push(size); is NOT within that loop and will refer back to the global variable size

