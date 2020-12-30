/* Your Code Here */

function createEmployeeRecord(arr){
  return  {firstName: arr[0], 
           familyName: arr[1],
           title: arr[2],
           payPerHour: arr[3],
           timeInEvents: [],
           timeOutEvents: []};
}

function createEmployeeRecords(arrofarr){
  return  arrofarr.map(arr =>{return createEmployeeRecord(arr) });
}

function createTimeInEvent(dateStamp){
  let stampIn=dateStamp.split(" ");
  this.timeInEvents.push({
    type:"TimeIn",
    hour:parseInt(stampIn[1],10),
    date:stampIn[0]
  })
  return this;
}


function createTimeOutEvent(dateStamp){
  let stampIn=dateStamp.split(" ");
  this.timeOutEvents.push({
    type:"TimeOut",
    hour:parseInt(stampIn[1],10),
    date:stampIn[0]
  })
  return this;
}

function hoursWorkedOnDate(datestr){
  let workIn = this.timeInEvents.find(t => t.date===datestr);
  let workOut= this.timeOutEvents.find(t => t.date === datestr);
  return (workOut.hour - workIn.hour)/100;
}

function wagesEarnedOnDate(datestr){
let salaryperday = this.payPerHour*hoursWorkedOnDate.call(this,datestr);
return salaryperday;
}


function findEmployeeByFirstName(srcArray,firstName){
  return srcArray.find(a => a.firstName===firstName);
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function calculatePayroll(Array){
  let payroll= Array.reduce((sum,item)=>sum + allWagesFor.call(item),0);
  return payroll;
}