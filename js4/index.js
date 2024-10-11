
for (let year=2014; year<=2050; year++) {
    let startDate = new Date(year,0,1);
    if(startDate.getDay() ===0) {
        console.log( `first january is a sunday in ${year}.`);
    }
}

