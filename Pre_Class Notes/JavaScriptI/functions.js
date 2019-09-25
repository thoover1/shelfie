                                            //concept
function myFunction() {
    console.log('hello!');
};

myFunction() //should spit out hello!

//function: a way to write repeatable code
//name of the function can be ANYTHING
//curly braces always go around repeatable code (i.e. your function)
//parentheses hold parameters to pass data to function (go within first parentheses on function line)


                                       //Passing in Data
function myFunction(num) { //num is a parameter name
    //**use the num in code**
};

myFunction(4); //now that this 4 is in myFunction, it will now be applied to the function above and replace all num's within the function

//next slide
var apples = 4;

apples;
//new example using similar concept
function myFunc(apples){ //now a 4 should be in place of apples
    apples //will return the value 4
}

//next slide
//using multiple parameters when calling a function
function shoeMaker (color, size){
    console.log(color + ' ' + 'size ' + size + ' ' + 'shoe');
};

shoeMaker('green', 10);

                                       //Sending out Data
function myFunction(){
    return data; //shares data back out with our code (return implies that sent code requires code back)
};
//Example
function giveMe7(){
    return 7;//passes the 7 down below to function invocation and should return 7
};

giveMe7();//this function invocation receives 7 based on the return used above and is COMPLETELY REPLACES the function invocation with just 7

//after the function invocation is replaced, we can move on with code.  See below:
function giveMe7(){
    return 7;
};

giveMe7() + 3; //this should return a value of 10 because giveMe7() is now permenately replaced with a value of 7

//adding more to previous example - adding these steps to a variable (very common practice)
function giveMe7(){
    return 7;
};

var ten = giveMe7() + 3;

//this will also work
function giveMe7(){
    var seven = 7;
    return seven;//this seven is pulling from the seven from the line above where seven was given the value of 7
};

var ten = giveMe7() + 3;

//next slide
function add(num1, num2){
    return num1 + num2;
};

var sum1 = add(1, 2);
var sum2 = add(sum1, 2);

//more complex function of previous example
function add(num1, num2){
    return num1 + num2;
};
function subtract(num1, num2){
    return num1 - num2;
};

var biggerAnswer = add(5, 1) / subtract(3, 1); //should return 3 for variable biggerAnswer

//another more complex function of previous example
function add(num1, num2){
    return num1 + num2;
};
function subtract(num1, num2){
    return num1 - num2;
};

var complexAnswer = subtract(add(5, 2), 3);//nesting add within subtract - should return 4

                                //Returning functions from a function

//Function that returns another function
function myFunc(){
    return function(){
        return 'hello!';
    }
}

function shoeMachineMaker (color){
    return function(){
        return color + ' ' + 'shoe';
    }
}

var blueShoeMaker = shoeMachineMaker('blue');
blueShoeMaker();//this additional step is required because the line above was to call the first function ONLY - the returned function can now be invoked

//next slide
//what if you use multiple parameters?
function shoeModelMaker (color, laces, soles, glitter){
    return function(size){//inner function is size
        return color + ' shoe with ' + laces + 'laces, ' + soles + ' soles, and ' + glitter + 'glitter' + ' in size ' + size;
    }
}

var moonJumperMaker = shoeModelMaker('magenta', 'yellow', 'green', 'pink');
moonJumperMaker(11); //this function when called will how report magenta shoe with yellow laces, green soles, and pink glitter in size 11 - inner function is also called (11) from first return statement above

                                //Declaration vs. Expression

//Produces ALMOST the same output - Expression may result in more unexplained bugs so the safer option is Declaration
//Function Declaration
function myFunc(){
    //**code here**
}

var x = myFunc()

//Function Expression
var myFunc = function(){

}

