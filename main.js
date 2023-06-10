
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