// Pre-loader Animation Start
// document.querySelector('.wrapper').style.display = 'none';
// document.getElementById('load').classList.add("loader");

// setTimeout(()=>{
//     document.getElementById('load').classList.remove("loader");
//     document.querySelector('.wrapper').style.display = 'block';
// }, 4000)
// Pre-loader Animation End




//Sticky Header Start
window.addEventListener("scroll", function(){
    var header = document.querySelector("#header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
//Sticky Header End




// Background Ellips Animation Start
document.addEventListener("mousemove", parallax);

function parallax(e){
    this.querySelectorAll('.layer').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed) / 100
        const y = (window.innerHeight - e.pageY*speed) / 100

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
// Background Ellips Animation End






// Choose Us Accordion JS Start

$(document).ready(function() {
    $('.accordion-title-wrap').click(function(e){
        var accordionitem = $(this).attr("data-tab");
        $("#" + accordionitem).slideToggle().parent().siblings().find(".accordion-content").slideUp();
        $(this).toggleClass("active-title-wrap");
        $("#" + accordionitem).parent().siblings().find(".accordion-title-wrap").removeClass("active-title-wrap");
    })
})

// Choose Us Accordion JS End





// split screen parallax effect start

// split screen parallax effect end

