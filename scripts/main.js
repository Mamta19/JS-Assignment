var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

   var fullName= firstName +" " +lastName;
   var isvalid;
   if(firstName > 0 && lastName > 0);{
       isvalid= true;
    }
    
    document.getElementById('p1_fullName').innerHTML=fullName;
   document.getElementById('p1_valid').innerHTML=isvalid;
   document.getElementById('p1_fullNameLength').innerHTML=fullName.length;

    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);

    var isValidEmail;
    if(emailAddress.indexOf('@')> -1){
        isValidEmail= true;
    }else{
        isValidEmail= false;
    }
       
     document.getElementById('p2_email').innerHTML=emailAddress;
   document.getElementById('p2_valid').innerHTML=isValidEmail;
   document.getElementById('p2_emailLength').innerHTML=emailAddress.length;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);
  var randomNumber;
    var isNumber = ((parseInt(randomNumber) >0));

    
       document.getElementById('p3_number').innerHTML=randomNumber;
    document.getElementById('p3_valid').innerHTML=isNumber;




    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);
        arrayItems.push(arrayInput);

   document.getElementById('p4_arraylength').innerHTML=arrayItems.length;
    document.getElementById('p4_valid').innerHTML=arrayItems;










    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

