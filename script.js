

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
            labels: ['Needs', 'Wants', 'Savings & Debt'],
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

function bulletpost() {

// Create close button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on  close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Bullet point entry
    var li = document.createElement("li");
    var inputValue = document.getElementById("bullet_input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("ultodo").appendChild(li);
    }
    document.getElementById("bullet_input").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}



