const calculateDateDifference = (date1String, date2String) => {
    console.log("date1String", date1String);
    console.log("date2String", date2String);
    
    // Parse the date strings into Date objects
    const date1 = new Date(date1String.slice(4), date1String.slice(2, 4) - 1, date1String.slice(0, 2));
    const date2 = new Date(date2String.slice(4), date2String.slice(2, 4) - 1, date2String.slice(0, 2));
  
    // Get the timestamp difference in milliseconds
    const timeDifference = date2.getTime() - date1.getTime();
  
    // Calculate the difference in days (assuming 24 hours per day)
    const differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    console.log("differenceInDays", differenceInDays);
    return differenceInDays;
}

module.exports = { calculateDateDifference };