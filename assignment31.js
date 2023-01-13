usernames = []


if (usernames === "hello"){
    usernames.forEach(element => {
        if (element === 'admin') {
            console.log("Hello admin, would you like to see a status report?")
        }
        else {
            console.log(`Hello ${element} thank you for logging in again!`)
        }
    });
}else{
    console.log('we need to find some users.');
}