


$(function () {
    // first number variable
    let num1 = "";
    //boolean valiable for if the first number is stored
    let isNum1 = false;

   // second number variable
    let num2 = "";
// boolean variable for if an operator button is selected
    let isOp = false;
    let ops = "";
    let ttl = "";
    let txt = $(".txt-area");
    // boolean variable for if decimal button is selected 
    let dec = false;

    // click event for each button of class btn
        $(".btn").each(function () {
            $(this).bind("click", function () {
                //store selected buttons value in btn variable
                let btn = $(this).val();

               
                
                if ((btn >= "0") && (btn <= "9")) {
                    // call numHandler function and pass in the btn variable if condition true
                    numHandler(btn);
                }
                // clears all data and resets if condition true
                else if (btn == "CE" || btn == "C") {
                    isNum1 = false;
                    isOp = false;
                    num1 = "";
                    num2 = "";
                    ops = "";
                    txt.text("");
                }
                // condition for decimals
                else if (btn == ".") {
                    if (!dec) {
                        dec = true;
                        txt.append(btn);
                    }
                }

            });
        });
    

// each loop to iterate through buttons of class ops
        $(".ops").each(function () {
    // click event for operator buttons eg.(+, -, *, /)
            $(this).bind("click", function () {
                let opV; 
                // condition for if user didnt enter a number before pressing on operator button
               if(txt.text() == ""){
                   opV = "";
               }
               // condition for if user did enter a number 
               else{
                isNum1 = true;
                dec = false;
                opV = $(this).val();
                
                if (opV == "=") {
                    isOp = false;
                    num2 = txt.text();
                    console.log("equals");
                    //call to calculate function
                    calculate();
                }
                else {
                    num1 = txt.text();
                    opHandler(opV);
                }
            }
            })
        })
    


// function that handles whether or not the user entered the first or second number
    function numHandler(num) {
        if (!isNum1) {
            num1 = num;
            txt.append(num1);
            console.log("number 1: " + num1);
        }
        else {
            num2 = num;
            txt.append(num2);
            console.log("number 2: " + num2);
        }
    }

// function to handle operator buttons
    function opHandler(op) {

        if (!isOp) {
            isOp = true;
            isNum1 = true;
            ops = op;
            txt.text("");
            console.log(ops);
        }
        else {
            $(".btn").each(function () {
                $(this).bind("click", function () {
                    let btn = $(this).val();
                    numHandler(btn);
                });
            });
        }
    }


    // function that displays calculated number
    function displayButton(btn) {

        txt.text(btn);

        num1 = btn;
    }


    // function to calculate numbers that user entered
    function calculate() {

        switch (ops) {
            case "+": ttl = +num1 + +num2;
                displayButton(ttl);
                break;
            case "-": ttl = +num1 - +num2;
                displayButton(ttl);
                break;
            case "/": ttl = +num1 / +num2;
                displayButton(ttl);
                break;
            case "x": ttl = +num1 * +num2;
                displayButton(ttl);
                break;
        }

    }

});



