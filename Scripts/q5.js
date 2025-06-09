var showMore = document.getElementById("show-more");
var moreDetails = document.getElementById("more-details");

showMore.addEventListener("click", () => {
    moreDetails.classList.toggle("hidden");
});