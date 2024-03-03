async function getData() {
    let parentNode = document.querySelector('.summary-list')
    try {
        let response = await fetch('./data.json');
        response = await response.json();
        response.map(item => {
            let li = document.createElement('li')
            li.classList.add(item.category)
            let content = `
                <img class="icon" src="${item.icon}" alt="">
                 ${item.category}<span class="score">${item.score} / 100</span>
            `
            li.innerHTML = content;
            parentNode.appendChild(li)
        })
        console.log(response)
    } catch(e) {
        console.log(e)
    }
}
getData()