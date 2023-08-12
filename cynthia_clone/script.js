
function mousemovecircle(){
    window.addEventListener("mousemove" , function(dets){
       document.querySelector("#mousemovecirlce").style.transform =`translate(${dets.pageX}px, ${dets.pageY}px)`;
    })
}

document.querySelectorAll(".imgelem").forEach(function(elem){

    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mouseleave", function(dets){

        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease:Power3,
            duration: 0.5,
        })
    })

    elem.addEventListener("mousemove", function(dets){

        var diff = dets.clientY - elem.getBoundingClientRect();
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease:Power1,
            top:diff,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot * 0.5),
        })
    })
})

function firstPageAnim() {
    var t1 = gsap.timeline();

    t1.from("#nav" , {
        y: '-10',
        opacity: 0,
        duration:1.5,
        ease:Expo.easeInOut,
    })
    .to(".boundingelem" , {
        y:0,
        duration:2,
        ease:Expo.easeInOut,
        stagger:.2,
        delay:-1,
    })
    t1.from(".herofooter" , {
        y: -10,
        opacity: 0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut,
    })
}

mousemovecircle();
firstPageAnim();