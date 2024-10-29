// // controlling CSS & Attributtes from JS

// document.getElementById("some-id").style; // accesses CSS rule for "some-id" element
// document.getElementById("some-id").style.border = "2px solid black";

// document.getElementById("some-image").src = "images/newpic.jpg"

// document.getElementById("some-a-tag").href = "http://newlink.com" // change the hyperlink

// changing an image vs adding a new image
// to add an image where there wasn't one befroe, you need a container for the image in html
// containers are empty <p>, <h1>, <div> elements
// for e.g. in html <div id="img-container"> </div>

// document.getElementById("img-container").innerHTML = "<img src=";

// apple vs android

document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  //change the `andriod vs apple` image to the android logo in the images folder
  document.getElementById("logo").src = "images/Android-Logo.jpg";

  document.getElementById("the-link").innerHTML = "Android Home";

  document.getElementById("the-link").style.background = "#a4c93b";

  document.getElementById("the-link").href = "http://www.android.com/";

  document.getElementById("the-html").style.background = "#a4c936";

  document.getElementById("the-body").style.fontFamily = "`Roboto`, sans-serif";

  document.getElementById("android").classList.add("redborder");

  document.getElementById("apple").classList.remove("redborder");
}

document.getElementById("apple").addEventListener("click", changeToApple);

function changeToApple() {
  //change the `andriod vs apple` image to the android logo in the images folder
  document.getElementById("logo").src = "images/Apple-Logo.jpg";

  document.getElementById("the-link").innerHTML = "Apple Home";

  document.getElementById("the-link").style.background = "#b6bcca";

  document.getElementById("the-link").href = "https://www.apple.com/&#39";

  document.getElementById("the-html").style.background = "#b6bcca";

  document.getElementById("the-body").style.fontFamily =
    "'Brygada 1918', serif";

  document.getElementById("apple").classList.add("redborder");

  document.getElementById("android").classList.remove("redborder");
}
