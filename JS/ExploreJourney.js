const filterBtns = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

function filterGallery(filter) {
    galleryItems.forEach(item=>{
        if (filter == 'all' || item.classList.contains(filter)) {
            item.style.display ="block";
        } else {
            item.style.display ="none";
        }
    });
};

// By default load all
filterGallery("all");

filterBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        // remove active from 'all'
        filterBtns.forEach(btn1=>btn1.classList.remove("active"));
        // add active to 'clicked'
        btn.classList.add("active");

        // filter the gallery
        const filterVal = btn.getAttribute("data-filter").toLowerCase();
        filterGallery(filterVal);
    });
});