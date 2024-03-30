import inquirer from 'inquirer';

type ansType = {
    userGuess: number
}

const systemGenertedNo = Math.floor(Math.random() * 10);


const answers : ansType = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        massage: "Write your guess b/w 1 to 10",
    }
])
        
const {userGuess} = answers;

console.log(userGuess, "userGuess", systemGenertedNo, 'SYs')
if(userGuess === systemGenertedNo){ 
    console.log("Your anser is correct /n You Win!")
} else {
    console.log("please try again")
}