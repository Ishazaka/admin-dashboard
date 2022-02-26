
// toggle menu
let toggle = document.querySelector('.toggle');
 let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let recent = document.querySelector('.recentcustomers');

toggle.onclick = function(){
  navigation.classList.toggle('active');
  main.classList.toggle('active');
  recent.classList.toggle('active');
}


// add hovered class on selected list

let list = document.querySelectorAll(".navigation li")
function activelink() {
 list.forEach((item) =>
 item.classList.remove('hovered'));
 this.classList.add('hovered');

}

list.forEach((item) =>
item.addEventListener('mouseover', activelink));


// adding charts

const ctx = document.getElementById('myChart').getContext('2d');
const earning = document.getElementById('earningchart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['facebook', 'Youtube', 'Amazon'],
        datasets: [{
            label: '# of Votes',
            data: [800, 1009, 2000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
      
        }]
    },
    options: {
        responsive: true,
    }
});

var myChart = new Chart(earning, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June','July'],
        datasets: [{
            label: '# of Votes',
            data: [2100, 1690, 2900, 2505, 1280, 903, 2650],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)', 
                 'rgba(54, 162, 235, 1)'
               
            ],
           
        }]
    },
    options: {
       responsive:true,
    }
});
