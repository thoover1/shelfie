//variable naming rules
//must start with $, _,, or a letter                                  
//can use any letter, number, $ or _ after first letter
// no whitespace
//cannot be a reserved keyword


                                  //*******EXAMPLES!!!!***** */
//declaration - creating a variable
var data;

//assignment - assigning a value to data
var data = 7;
var x = 10;

//retrieval - will output 7
data;

//use - result will equal 17
x + data;

//combination - creating new variable num to combine two other variables (for an easy shortcut)
var num = x + data;

//copy - copying x (10) and turning data into 10
var data = x;

//string
var string = "asdfkjl"
var string2 = 'lkjasdf'

//boolean
var boolean = true;
var boolean2 = false;

//ETC.
var nothing = null; // this is how you empty out a variable (i.e. delete contents of a variable)
var nothing2 = undefined; // the default value for the majority of variables
var nothing3 = 77 / "words"; // NaN - Not a number (output)

