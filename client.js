console.log('JS');

$(document).ready(readyNow);
//array of employees to be filled
let employeeArray = [];

function readyNow(){    
    console.log('Hello from jQuery');
    //intaking the employee input forms on click and sending to employeeInput
    $("#submit").on('click', employeeInput);    
}

// taking in form information from the forms and creating an 
//employee object to add to the emloyeeArray
function employeeInput(event) {

    event.preventDefault();
    //----createing an employee object & pushing to array ----
    let newEmployeeObj = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        title: $('#title').val(),
        salary: $('#salary').val()
    }
    employeeArray.push( newEmployeeObj ); 

    //calling a function that adds the employee to the DOM
    addEmployeeToDOM(employeeArray);

    //---- Clearing input values ----
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#title').val('');
    $('#salary').val('');

    //calculate monthly coast and append to the DOM    
    $('#monthlyCost').val(monthlyCostCalculator());

    // Turn background color red if monthlyCost is greater than 20,000
    if(monthlyCostCalculator() > 20000){
        $('#monthlyCost').addClass('redBackground');
        
        console.log('in if');
        

    }
}

function monthlyCostCalculator(){   
    let monthlyCost = 0;
    for(let employee of employeeArray){       
        //Number forces the .salary to intake as a number 
        //instead of the default text 
       monthlyCost += Number(employee.salary);
    }
    return monthlyCost;
}

function addEmployeeToDOM( array ) {   
    console.log('in add employee');
     
    let i = array.length;
    let firstName = array[0].firstName;
    
    // $('ul').append('<li> ',array[i].firstName,' </li>');
    
}