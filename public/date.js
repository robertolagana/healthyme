
module.exports.getDate = getDate;

function getDate() {

let today = new Date();

let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

let day = today.toLocaleDateString("en-GB", options);

return day;

}


// simplifying (or refactoring the code) the below function but does same as the one above


exports.getDay = function() {

  const today = new Date();

  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-GB", options);

}
