const init = () => {
  const displayPostsButton = document.querySelector(
    '[data-id="display-posts-button"]'
  );
  const sortPostsSelect = document.querySelector('[data-id="sort-posts"]');
  const postsContainer = document.querySelector('[data-id="posts-container"]');

  let posts = [];
  let userPosts = [];
  let isUserView = false;

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      posts = [...data];
    } catch (e) {
      console.warn(e.message);
    }
  };

  const displayPosts = async () => {
    if (isUserView) {
      isUserView = false;
      sortPostsSelect.value = "unsorted"
    }

    await getPosts();
    createCards(posts);
    displayPostsButton.classList.add("hidden");
    sortPostsSelect.classList.remove("hidden");
  };

  const createCards = (array) => {
    postsContainer.replaceChildren();
    array.forEach((element) => {
      const card = document.createElement("div");
      const title = document.createElement("h3");
      const user = document.createElement("p");
      const userLink = document.createElement("button");

      title.textContent = element.title;
      user.textContent = `User ${element.userId}`;
      userLink.textContent = "See all posts by this user";
      userLink.setAttribute("data-user", element.userId);
      userLink.dataset.id = "user-posts-link";
      userLink.addEventListener("click", showUserPosts);

      card.setAttribute("id", element.id);
      card.appendChild(title);
      card.appendChild(user);
      card.appendChild(userLink);

      postsContainer.appendChild(card);
    });
  };

  const handleSort = (event, array) => {
    let sortedPosts = [...array];

    if (event.target.value === "a-to-z") {
      sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (event.target.value === "z-to-a") {
      sortedPosts.sort((a, b) => b.title.localeCompare(a.title));
    }

    createCards(sortedPosts);
  };

  const showUserPosts = (event) => {
    isUserView = true;
    userPosts = [...posts].filter(
      (post) => post.userId === Number(event.target.dataset.user)
    );

    createCards(userPosts);
    sortPostsSelect.value = "unsorted";
    displayPostsButton.classList.remove("hidden");
    displayPostsButton.textContent = "Go back to all posts";
  };

  displayPostsButton.addEventListener("click", displayPosts);
  sortPostsSelect.addEventListener("change", (event) => {
    isUserView ? handleSort(event, userPosts) : handleSort(event, posts);
  });
};

window.addEventListener("DOMContentLoaded", init);
