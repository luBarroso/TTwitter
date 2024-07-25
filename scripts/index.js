document.addEventListener("resize", (event) => {
  if (window.innerWidth < 1000)
    document.getElementById("h3-recomendations").innerHTML =
      "Talvez você conheça";
});

document.getElementById("send-post-button").addEventListener("click", () => {
  let textPost = document.getElementById("timeline-text-area").value;
  let attachedImage = document.getElementById("attach-image");

  let divPost = document.createElement("div");
  divPost.classList.add("post");

  divPost.innerHTML = `
            <div class="post-functions">
              <button class="profile-button">
                <img
                  src="../images/profile-picture.jpg"
                  alt="user-profile"
                  class="profile-picture"
                />
                <p>@usuario</p>
              </button>
              <div class="list-post-buttons">
                <button class="post-button">
                  <img src="../images/comment-icon.svg" alt="comment" />
                </button>
                <button class="post-button">
                  <img src="../images/like-icon.svg" alt="like" />
                </button>
                <button class="post-button">
                  <img src="../images/heart-icon.svg" alt="heart" />
                </button>
              </div>
            </div>
            <p>${textPost}</p>
    `;

  //<img src="../images/post-example.png" alt="" />
  if (attachedImage.value != "") {
    let imagem = document.createElement("img");
    imagem.src = URL.createObjectURL(attachedImage.files[0]);
    imagem.alt = "imagem anexada";

    divPost.insertBefore(imagem, divPost.firstChild);
  }

  document.getElementById("timeline").appendChild(divPost);
  document.getElementById("timeline-text-area").value = "";
  document.getElementById("attach-image").value = "";
});
