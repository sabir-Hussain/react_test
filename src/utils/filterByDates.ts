const  checkDates = (fromDate:any, toDate:any, dateOnly:any) => {
    if(fromDate && toDate) {
      return (new Date(dateOnly) >= new Date(fromDate) && new Date(dateOnly) <= new Date(toDate))
    }else if(fromDate){
      return (new Date(dateOnly) >= new Date(fromDate))
    }else if(toDate){
      return (new Date(dateOnly) <= new Date(toDate))
    }
  }

  export default checkDates;