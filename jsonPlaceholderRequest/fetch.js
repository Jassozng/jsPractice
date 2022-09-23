let petitionData;
window.onload = async () => {
    await getData();
    const searchInput = document.getElementById("searchButton");
    searchInput.addEventListener("click", () => {search()});
    fillTable(petitionData);
};

const getData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users?10')
    .then((response) => response.json())
    .then((data) => petitionData = data);
    return petitionData;
};


function search(){
    const usernameToSearch = document.getElementById("searchUser").value;
    const table = document.getElementById("users-table");
    let username = document.getElementById("searchUser");
    let userData = [];
    if(username.value == ""){
        table.innerHTML = "";
        table.innerHTML = 
        `
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
        `;
        fillTable(petitionData);
    }else{
        for(user in petitionData){
            petitionData[user]["username"] == username.value ? userData.push(petitionData[user]) : console.log();
        }
        table.innerHTML = "";
        table.innerHTML = 
        `
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
        </thead>
        `;
        fillTable(userData);
        username.value = "";
    };
};

const fillTable = async (petitionData) =>{
    const usersTable = document.getElementById("users-table");
    for(let value in petitionData){
        let newRow = usersTable.insertRow();
        let idCell = newRow.insertCell();
        idCell.innerHTML = petitionData[value]["id"];
        let nameCell = newRow.insertCell();
        nameCell.innerHTML = petitionData[value]["name"];
        let usernameCell = newRow.insertCell();
        usernameCell.innerHTML = petitionData[value]["username"];
        let emailCell = newRow.insertCell();
        emailCell.innerHTML = petitionData[value]["email"];
    }
};