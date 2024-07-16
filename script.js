gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.text')

splitTypes.forEach((char, i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'lines' })

    // gsap.fromTo(text.lines,
    //     {
    //         color: bg,
    //     },
    //     {
    //         color: fg,
    //         duration: 0.3,
    //         stagger: 0.02,
    //         scrollTrigger: {
    //             trigger: char,
    //             start: 'top 80%',
    //             end: 'top 20%',
    //             scrub: true,
    //             markers: false,
    //             toggleActions: 'play play reverse reverse'
    //         }
    //     })

    gsap.from(text.lines, {
        scrollTrigger: {
            trigger: char,
            start: 'top 50%',
            end: 'bottom 90%',
            scrub: true,
            markers: true,
        },
        opacity: 0.1,
        stagger: 0.2,
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
