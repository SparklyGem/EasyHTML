var easyHTML = {
  // Makes a button with a value (text, an image, or any HTML element), what to do when it's clicked, and, optionally, give it an id
  button: function(value, event, id) {
    var btn = document.createElement("button");
    btn.innerHTML = value;
    btn.addEventListener("click", event);
    btn.id = id;
    document.body.appendChild(btn);
  }
};
