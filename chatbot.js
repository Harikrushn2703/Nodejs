
function getResponse(userInput) {

  const input = userInput.toLowerCase();

  if (input.includes("book")) {

    return "We have books on many topics. Please specify the subject.";

  } else if (input.includes("available")) {

    return "Yes, the book is available in the general section.";

  } else if (input.includes("timing")) {

    return "Library is open from 9 AM to 6 PM on weekdays.";

  } else if (input.includes("membership")) {

    return "To get a library membership, please fill the form at the front desk.";

  } else if (input.includes("bye") || input.includes("exit")) {

    return "Goodbye! Have a nice day.";

  } else {

    return "Sorry, I didn't understand that. Can you rephrase?";

  }

}

module.exports = { getResponse };