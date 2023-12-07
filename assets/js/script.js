document.addEventListener("DOMContentLoaded", function () {
  const posts = document.querySelectorAll(".blog-post");

  posts.forEach((post) => {
    post.addEventListener("click", function () {
      this.querySelector(".full-post").classList.toggle("show");
    });
  });
});
