const form = document.querySelector("#search-form > form")
const input:HTMLInputElement | null = document.querySelector("#input-localizacao")
const sectionTempoInfo = document.querySelector("#tempo-info")

form?.addEventListener("submit", async(event) => {
    event.preventDefault()

    if(!input || !sectionTempoInfo) return
    const localizacao = input.value

    if(localizacao.length < 3){
        alert('Digite uma localização valida')
        return
    }

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=7b46578251f4d7f5151e13fead202310&lang=pt_br&units=metric`)
    const dados = await response.json();
    console.log(dados)

    const infos = {
        temperatura: Math.round(dados.main.temp),
        local: dados.name,
        icon: `https://openweathermap.org/img/wn/${dados.weather[0].icon}@2x.png`
    }

    sectionTempoInfo.innerHTML = `
        <div class="tempo-dados">
            <h2>${infos.local}</h2>
            <span>${infos.temperatura}°C</span>
                
        </div>
            <img src="${infos.icon}"/>
    
    `

    // const newLocal = document.createElement("h2")
    // newLocal.textContent = infos.local

    // const newTemp = document.createElement("span")
    
    // newTemp = infos.temperatura
})