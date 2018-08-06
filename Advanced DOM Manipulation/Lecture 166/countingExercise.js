//https://developer.mozilla.org/en-US/docs/Web/Events
//find the number of events in the above website using what we've learned so far
//No manual counting

//inspect the page and found the events are using tables
document.querySelectorAll("tables") //24

//first tr on each table is heading so don't need to count the first row
//find out how many tr in the page
document.querySelectorAll("tr") //464

//now subract the table length from tr length
document.querySelectorAll("tr").length - document.querySelectorAll("tables")

//result: 440