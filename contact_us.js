document.addEventListener("DOMContentLoaded", function () {
  const feedbackTextarea = document.getElementById("feedbackTextarea");
  const submitButton = document.getElementById("submitFeedback");

  submitButton.addEventListener("click", function () {
    const feedback = feedbackTextarea.value.trim(); // Get the feedback text

    if (feedback !== "") {
      // Display a prompt if feedback is not empty
      alert(
        "Thank you for submitting the Feedback. Your feedback will be considered!!"
      );
      feedbackTextarea.value = ""; // Clear the textarea
      // You can change button styles here
      submitButton.style.backgroundColor = "#32CD32"; // Change button color
    } else {
      // Handle empty feedback
      alert("Please enter your feedback before submitting.");
    }
  });
});
