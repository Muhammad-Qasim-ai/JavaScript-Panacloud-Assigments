let current_usernames = ['qasim', 'ali', 'admin', 'ayan', 'rizwan']
let new_usernames = ['qasim', 'ali', 'rizwan', 'shami', 'babar']
  
    new_usernames.forEach(element => {
        if (current_usernames.includes(element)){
            console.log("Sorry " + element + ", that name is taken.");
        }else{
            console.log("Great, " + element + " is still available.");
        }
    });

