

function calculate(){
    var user_input = document.getElementById("monthlyincome").value;
    var percentages = {
        perfifty: (50 / 100) * user_input,
        perthirty: (30 / 100) * user_input,
        pertwenty: (20 / 100) * user_input
    };

    


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Housing', 'Wants', 'Savings & Debt'],
            datasets: [{
                label: '',
                data: [percentages.perfifty, percentages.perthirty, percentages.pertwenty],
                backgroundColor: [
                    '#FFDE7D',
                    '#F6416C',
                    '#F8F3D4'
                ],
              
                borderWidth: 1
                
            }]
        },
        options: {
            scales: {

                ticks: {
                    display: false
                },

                x: {
                    grid:{
                        display:false,
                        drawBorder: false,
                  
                    },
                
                y: {
                    beginAtZero: true ,
                    grid:{
                        dispay:false
                    }}
                }
            }
        }
    });

   
  document.getElementById("50%").innerHTML = percentages.perfifty;
  document.getElementById("30%").innerHTML = percentages.perthirty;
  document.getElementById("20%").innerHTML = percentages.pertwenty;





};





