document.addEventListener('DOMContentLoaded',function(){
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');
  if(menuToggle && navList){
    menuToggle.addEventListener('click',()=>{
      const open = navList.style.display === 'flex' || navList.style.display === 'block';
      navList.style.display = open ? 'none' : 'block';
      menuToggle.setAttribute('aria-expanded', String(!open));


  }
  
  )}});
window.onload = () =>{GetWeather();}
function GetWeather(){
  const weatherTableBody = document.getElementById('weatherTableBody');
  const day = new Date().toDateString().substring(0,4);
weatherTableBody.classList.add('robot');

  fetch('http://127.0.0.1:8000')
    .then(response => response.json())
    .then(data => {
        let weatherHTML = '';
        weatherHTML += '<tr><td>' + day + '</td><td>' + data.main.temp + '</td><td>' + data.weather[0].main + '</td></tr>';
        weatherTableBody.innerHTML = weatherHTML;
        
    });
    
}

