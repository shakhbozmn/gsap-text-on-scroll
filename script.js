gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.text')
const bgOverlay = document.querySelector('.img-overlay');

const bgDark = 'rgba(0, 0, 0, 0.6)'; // Darker overlay color
const bgLight = 'rgba(0, 0, 0, 0.3)'; // Lighter overlay color

gsap.to(bgOverlay, {
    background: bgDark,
    duration: 0.5,
    scrollTrigger: {
        trigger: bgOverlay,
        start: 'top 0%',
        end: 'bottom 30%',
        scrub: true,
        markers: false,
        toggleActions: 'play play reverse reverse'
    }
});


splitTypes.forEach((char, i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'lines' })

    gsap.from(text.lines, {
        scrollTrigger: {
            trigger: char,
            start: 'top 50%',
            end: 'bottom 100%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse'
        },
        opacity: 0.1,
        stagger: 0.3,

    })
})




const lenis = new Lenis()

lenis.on('scroll', (e) => {
    // console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
