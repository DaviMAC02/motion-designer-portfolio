// Get comment form and comments container
const commentForm = document.getElementById("comment-form");
const commentsContainer = document.querySelector(".comments-container");

// Add event listener to comment form
commentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get user inputs
  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");
  const name = nameInput.value;
  const comment = commentInput.value;

  // Create new comment element
  const newComment = document.createElement("div");
  newComment.classList.add("comment");

  const commentHeader = document.createElement("div");
  commentHeader.classList.add("comment-header");

  const authorName = document.createElement("h4");
  authorName.textContent = name;

  const commentDate = document.createElement("span");
  commentDate.classList.add("comment-date");
  const now = new Date();
  commentDate.textContent = now.toLocaleDateString('pt-BR');

  const commentBody = document.createElement("div");
  commentBody.classList.add("comment-body");
  const commentText = document.createElement("p");
  commentText.textContent = comment;

  // Append comment elements to new comment element
  commentHeader.appendChild(authorName);
  commentHeader.appendChild(commentDate);
  commentBody.appendChild(commentText);
  newComment.appendChild(commentHeader);
  newComment.appendChild(commentBody);

  // Append new comment element to comments container
  commentsContainer.appendChild(newComment);

  // Reset form inputs
  nameInput.value = "";
  commentInput.value = "";
});