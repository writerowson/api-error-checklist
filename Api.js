const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displaySingleUser(data.results[0]))
}
loadSingleUser()
const displaySingleUser = user => {
    console.log(user)
}

const loadSports = searchText => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySports(data.sports))
}
loadSports()

const displaySports = sports => {
    const container = document.getElementById('sports');
    sports.forEach(sports => {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${sports.strSport}</h1>
        <button>Press Here</button>
        `;
        container.appendChild(div)
    });
}