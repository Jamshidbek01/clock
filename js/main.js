let hafta = ['Yakshanba', 'Dushanba',
    "Seshanba",
    "Chorshanba",
    'Payshanba',
    "Juma",
    "Shanba"]
let oy = ['Yanvar', 'fevral', 'Mart', 'aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
setInterval(() => {
    let time = document.querySelector('.time')
    let day = document.querySelector('.day')
    let dates = new Date()
    let year = dates.getFullYear()
    let month = dates.getMonth()
    let days = dates.getDay()
    let date = dates.getDate()
    let hour = dates.getHours()
    let min = dates.getMinutes()
    let sec = dates.getSeconds()
    min < 10 ? min = "0" + min : min
    sec < 10 ? sec = "0" + sec : sec
    day.innerHTML = `<span>${year}-yil </span><span>${date}-${oy[month]}</span><span> ${hafta[days]}</span>`
    time.innerHTML = `<span>${hour}</span>:<span>${min}</span>:<span>${sec}</span>`
}, 1000);