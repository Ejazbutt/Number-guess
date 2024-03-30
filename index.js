import inquirer from 'inquirer';
const systemGenertedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        massage: "Write your guess b/w 1 to 10",
    }
]);
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGenertedNo, 'SYs');
if (userGuess === systemGenertedNo) {
    console.log("Your anser is correct /n You Win!");
}
else {
    console.log("please try again");
}
