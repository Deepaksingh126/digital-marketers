
function page1animation() {
    var tl1 = gsap.timeline();

    tl1.from("nav .part1,nav a, nav .part2, nav .part3", {
        y: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    })

    tl1.from(".landing h6,.landing p ,.landing .social-media,.landing .more", {
        x: -200,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2
    })

    tl1.from(".landing img", {
        x: 200,
        opacity: 0,
        duration: 0.4,
    })

}

function page2animation() {

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".work",
            scroller: "body",
            start: "top 60%",
            end: "top 0%",
            scrub: 2,
        }
    })

    tl2.from(".work h2, .work p", {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
    })
    tl2.from(".card-sec .card", {
        opacity: 0,
        y: 300,
        duration: 0.5,
    })
}

function page3animation() {

    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".contact",
            scroller: "body",
            start: "top 60%",
            end: "top 0%",
            scrub: 2,
        }
    })
    tl3.from(".contact img , .contact h1 , .contact p", {
        x: 70,
        duration: 0.5,
        opacity: 0,
    })

    tl3.from("input,.contact form textarea, form button", {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.1
    })

}

page1animation();
page2animation();
page3animation();
