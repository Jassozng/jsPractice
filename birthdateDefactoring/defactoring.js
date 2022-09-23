window.onload = () => {
    const defactorButton = document.getElementById("defactor");
    const dateInput = document.getElementById("birthdateInput").max = Date();
    defactorButton.addEventListener("click", (event) => {
        event.preventDefault();
        const date = new Date(document.getElementById("birthdateInput").value);
        const livedTime = dateDefactoring(date);
        const solutionSection = document.getElementById("results");
        solutionSection.innerHTML = ""; 
        solutionSection.innerHTML = 
        `
        <h1>Your timeline</h1>
        <table>
            <thead>
                <tr>
                    <th>Miliseconds</th>
                    <th>Seconds</th>
                    <th>Minutes</th>
                    <th>Hours</th>
                    <th>Days</th>
                    <th>Months</th>
                    <th>Years</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${livedTime["miliseconds"]}</td>
                    <td>${livedTime["seconds"]}</td>
                    <td>${livedTime["minutes"]}</td>
                    <td>${livedTime["hours"]}</td>
                    <td>${livedTime["days"]}</td>
                    <td>${livedTime["months"]}</td>
                    <td>${livedTime["years"]}</td>
                </tr>
            </tbody>
        </table>
        `;
    });
};

const dateDefactoring = (date) => {
    const today = new Date();
    const miliseconds = today - date;
    const seconds = Math.floor(miliseconds/1000);
    const minutes = Math.floor(seconds/60);
    const hours = Math.floor(minutes/60);
    const days = Math.floor(hours/24);
    const months = (Math.floor(days/365) * 12) + (today.getMonth() - date.getMonth());
    const years = Math.floor(days/365);
    const livedTime = {"miliseconds": miliseconds, "seconds": seconds, "minutes": minutes, "hours": hours, "days": days, "months": months, "years": years};
    return livedTime;
};