const getCookie = (name) => {
    const value = " " + document.cookie;
    console.log("value", `==${value}==`);
    const parts = value.split(" " + name + "=");
    return parts.length < 2 ? undefined : parts.pop().split(";").shift();
  };
  
  const setCookie = function (name, value, expiryDays, domain, path, secure) {
    const exdate = new Date();
    exdate.setHours(
      exdate.getHours() +
        (typeof expiryDays !== "number" ? 365 : expiryDays) * 24
    );
    document.cookie =
      name +
      "=" +
      value +
      ";expires=" +
      exdate.toUTCString() +
      ";path=" +
      (path || "/") +
      (domain ? ";domain=" + domain : "") +
      (secure ? ";secure" : "");
  };


globalThis.popupThePopupBanner = function(oldAccept, oldDecline) {

    parentDiv = document.createElement("div");
    parentDiv.setAttribute("style", "position: fixed !important; left: 16px !important; bottom: 16px !important;  width: 32rem; padding: 32px !important; background-color: rgb(0, 0, 0); z-index: 2001; overflow: auto; text-align: left;");
  
  
    siblingDiv = document.createElement("div");
  
    textDiv = document.createElement("div");
    textDiv.setAttribute("style", "text-align:left; color: rgb(255,255,255); background-color: rgb(255, 0, 0)");
  
    textHeadline = document.createElement("div");
    textHeadline.setAttribute("style", "text-align: center; color: rgb(255,255,255)");
    textHeadline.innerHTML = "Wanna cookies?"
    modalDialogText = document.createElement("p");
    
  
  

  
    textHeadline.appendChild(modalDialogText);
  
    textDiv.appendChild(textHeadline);
    textDiv.appendChild(acceptButton);
    textDiv.appendChild(declineButton);
  
    siblingDiv.appendChild(textDiv);
  
    parentDiv.appendChild(siblingDiv);
  
    document.body.appendChild(parentDiv);
  }
  
  globalThis.popupThePopupBanner();

// this gets HTML collection of all elements with the 'custom-hotspot' class
const elementCollection = document.getElementsByClassName('custom-hotspot');

// add a click listener to each element
elementCollection.forEach(e => {
   e.addEventListener('click', handleClick, {passive: true});
});

/// here we toggle our 'clicked' class
function handleClick(event) {
   // if '.target' does not work as expected try '.currentTarget'
   event.target.classList.toggle('clicked');
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}




  function onSubmit() {
    document.donation.amount.value = document.donation.amount.value;
    return true;
  }




