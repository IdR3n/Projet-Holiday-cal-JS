
document.addEventListener('DOMContentLoaded', async function getFetes() {
    try {
        const res = await axios.get('https://date.nager.at/api/v3/publicholidays/2023/CH');
        const fetesList = res.data
        const holElement = document.getElementById('calendar');

        for (let fetes of fetesList) {
            const fetesEl = document.createElement('div')
            fetesEl.classList.add('col')
            fetesEl.addEventListener('click', function () {
                alert(fetes.date)
            })
            holElement.appendChild(fetesEl)
        }

        let feteModifie = fetesList.map((fete) => {
            return {
                'start': fete.date,
                'title': fete.name
            }
        })


        const calendarEl = document.getElementById('calendar');
        const calendar = new FullCalendar.Calendar(calendarEl, {
            initialView: 'dayGridMonth',
            contentHeight: 600,
            height: 15000,
            events: feteModifie,
            headerToolbar: {
                center: 'addEventButton'
              },
              customButtons: {
                addEventButton: {
                  text: 'add event...',
                  click: function() {
                    var dateStr = prompt('Enter a date in YYYY-MM-DD format');
                    var date = new Date(dateStr + 'T00:00:00'); // will be in local time
          
                    if (!isNaN(date.valueOf())) { // valid?
                      calendar.addEvent({
                        title: 'new event!',
                        start: date,
                        allDay: true
                      });
                      alert('Great. Now, update your database...');
                    } else {
                      alert('Are you sure?');
                    }
                  }
                }
              }
        });
        calendar.render();



    } catch (e) {
        throw e;
    }
    //check this out...
    
    //--------------------------------------------------------------------------------------------------//
    //let mButton = document.getElementById("mButton");
    //mButton = [];
    //
    ////iki defa listener var birisini kaldirmam gerekiyor..
    //for (let mdlbttn of mButton) {
    //mdlbttn = document.addEventListener('click', function () {
    //    
    //    modal.createElement("div");
    //
    // mdlbttn.classList.add("fc-event-title-container");
    //});
    //}
//--------------------------------------------------------------------------------------------------//

    // I need eventListener -> when I click it must be open a modal for add new holiday in the date the i clicked(nessesaire)...

    //nouvelle Modal doit faire dans le html pour comprendre mieux utilisation de JavaScript(nessesaire)...

//Here is for add a new holiday in our agenda...

    let modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
});