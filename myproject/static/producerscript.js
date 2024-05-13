
const driver = window.driver.js.driver;

// const driverObj = driver();

// driverObj.highlight({
//   element: "#board1",
//   popover: {
//     title: "Produce",
//     description: "Here you will see the produce"
//   }
// });


const driverObj = driver({
    showProgress: true,
    steps: [
      { element: '#board1', popover: { title: 'Your Total Produce', description: 'Here is your produced crop that you have entered' } },
      { element: '#board2', popover: { title: 'Income Received', description: 'Your received income will be shown here' } },
      { element: '#board3', popover: { title: 'Your Profit Share', description: 'Here is your profit share' } },
      { element: '#google_translate_element', popover: { title: 'Language Changer', description: 'You can change the webpage language simply by selecting your preferable language ' } },
      { element: '.navbar-toggler', popover: { title: 'Options Button', description: 'Click here for more options' } },
      { element: '#produce_form', popover: { title: 'Produce information', description: 'Upload your product information here' } },
      { element: '#result_produce', popover: { title: 'Produce information', description: 'Upload your product information here' } },
    ]
  });
  
  driverObj.drive();

let tour_btn = document.getElementById("tour_btn");

tour_btn.addEventListener("click",() => {
    const driverObj = driver({
        showProgress: true,
        steps: [
          { element: '#board1', popover: { title: 'Your Total Produce', description: 'Here is your produced crop that you have entered' } },
          { element: '#board2', popover: { title: 'Income Received', description: 'Your received income will be shown here' } },
          { element: '#board3', popover: { title: 'Your Profit Share', description: 'Here is your profit share' } },
          { element: '#google_translate_element', popover: { title: 'Language Changer', description: 'You can change the webpage language simply by selecting your preferable language ' } },
          { element: '.navbar-toggler', popover: { title: 'Options Button', description: 'Click here for more options' } },
          { element: '#produce_form', popover: { title: 'Produce information', description: 'Upload your product information here' } },
          { element: '#result_produce', popover: { title: 'Produce information', description: 'Upload your product information here' } },
        ]
      });
    driverObj.drive();
});


function googleTranslateElementInit(){
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    )
}


// for form purposes

// Get the form element
// let form = document.getElementById("produce_form");
// let amt = document.getElementById("amt");
// // let income = document.getElementById("income");


// // Add an event listener for form submission
// form.addEventListener("submit", function(event) {
//     // Prevent the default form submission
//     event.preventDefault();

//     // Get the values of the form inputs
//     let name = document.getElementById("name").value;
//     let phone_no = document.getElementById("phone_no").value;
//     let address = document.getElementById("address").value;
//     let items = document.getElementById("items").value;
//     let selectedValue = document.getElementById("items").value;
//     let amount = document.getElementById("amount").value;
//     // income = amount*100;
//     // Do something with the values (e.g., print to console)
//     console.log("Name:", name);
//     console.log("Email:", phone_no);
//     console.log("Message:", address);
//     console.log("Selected value:", selectedValue);
//     console.log("Amount:", amount);
//     amt.innerText = `${amount}Kg`;
//     // income.innerHTML = `₹${income}`;

//     // You can send the values to your backend or perform any other action here
// });


// chart JS

const ctx = document.getElementById('myChart');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [20,99],
              borderWidth: 10
            }]
          },
          options: {
            // scales: {
            //   y: {
            //     beginAtZero: true
            //   }
            // }
          }
        });
