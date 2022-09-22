
window.onload = async () => {
    const usersData = await getData();
    const usersTable = document.getElementById("users-table");
    for(let value in usersData){
        let newRow = usersTable.insertRow();
        let idCell = newRow.insertCell();
        idCell.innerHTML = usersData[value]["id"];
        let nameCell = newRow.insertCell();
        nameCell.innerHTML = usersData[value]["name"];
        let usernameCell = newRow.insertCell();
        usernameCell.innerHTML = usersData[value]["username"];
        let emailCell = newRow.insertCell();
        emailCell.innerHTML = usersData[value]["email"];
    }
    
}

const getData = async () => {
    let petitionData;
    await fetch('https://jsonplaceholder.typicode.com/users?10')
    .then((response) => response.json())
    .then((data) => petitionData = data);
    return petitionData;
} 


function search(username){
    return petitionData[username];
}