// MY SOLUTION

const checkboxes = document.querySelectorAll('[type=checkbox]');

let firstCheck, lastCheck;

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('click', (e) => handleCheck(e, index));
});

function handleCheck(e, index) {
  if (e.shiftKey && firstCheck >= 0) {
    lastCheck = index;
    checkboxes.forEach((el, index) => {
      if (firstCheck < lastCheck) {
        if (index >= firstCheck && index <= lastCheck) {
          el.checked = true;
        }
      } else {
        if (index >= lastCheck && index <= firstCheck) {
          el.checked = true;
        }
      }
    });
  }

  firstCheck = index;
}

// AUTHOR SOLUTION

// let lastChecked;

// function handleCheck(e) {
//   // Check if they had the shift key down
//   // AND check that they are checking it
//   let inBetween = false;
//   if (e.shiftKey && this.checked) {
//     // go ahead and do what we please
//     // loop over every single checkbox
//     checkboxes.forEach((checkbox) => {
//       if (checkbox === this || checkbox === lastChecked) {
//         inBetween = !inBetween;
//       }

//       if (inBetween) {
//         checkbox.checked = true;
//       }
//     });
//   }

//   lastChecked = this;
// }

// checkboxes.forEach((checkbox) => checkbox.addEventListener('click', handleCheck));
