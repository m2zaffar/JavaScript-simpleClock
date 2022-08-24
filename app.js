const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

setInterval(()=>{
    const newDate = new Date()
    hour.textContent = newDate.getHours() < 10 ? `0${newDate.getHours()}`:newDate.getHours()
    minute.textContent = newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}`:newDate.getMinutes()
    second.textContent = newDate.getSeconds() < 10 ? `0${newDate.getSeconds()}`:newDate.getSeconds()

},1000);