//document.addEventListener('DOMContentLoaded', function() {
//    var calendarEl = document.getElementById('calendar');
//    var calendar = new FullCalendar.Calendar(calendarEl, {
//      initialView: 'dayGridMonth'
//    });
//    calendar.render();
//  });
//
//  async function getHoliday() {
//    try{
//        const response = await axios.get('https://date.nager.at/api/v3/publicholidays/2023/CH');
//        const holidayList = response.data
//        const holElement = document.getElementById('holidayList');
//        console.log(response.data)
//        for (let holiday of holidayList) {
//            const holEl = document.createElement('div')
//            holEl.classList.add('col')
//            holEl.addEventListener('click', function(){
//                alert(holiday.date)
//            })
//            holElement.appendChild(holEl)
//        }
//    } catch(e){
//        console.error(e);
//    }
//  }
//  getHoliday();

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
            events: feteModifie
        });
        calendar.render();



    } catch (e) {
        throw e;
    }


    // I need eventListener -> when I click it must be open a modal for add new holiday in the date the i clicked...

    //nouvelle Modal doit faire dans le html pour comprendre mieux utilisation de JavaScript...

//    <div class="modal" tabindex="-1" role="dialog">
//  <div class="modal-dialog" role="document">
//    <div class="modal-content">
//      <div class="modal-header">
//        <h5 class="modal-title">Modal title</h5>
//        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//          <span aria-hidden="true">&times;</span>
//        </button>
//      </div>
//      <div class="modal-body">
//        <p>Modal body text goes here.</p>
//      </div>
//      <div class="modal-footer">
//        <button type="button" class="btn btn-primary">Save changes</button>
//        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//      </div>
//    </div>
//  </div>
//</div>

//Here is for add a new holiday in our agenda...

    let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("modalButton");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

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