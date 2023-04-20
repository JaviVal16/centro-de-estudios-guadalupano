

/* function pageTransition() {
    let tl = gsap.timeline();
    tl.to('.transition li', { duration: .4, scaleY: 1, transformOrigin: 'top left', stagger: .2 });
    tl.to('.transition li', { duration: .4, scaleY: 0, transformOrigin: 'bottom rigth', stagger: .2, delay: .1 });
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function contentAnimation() {
    let tl = gsap.timeline();
    tl.from('.titulo', { duration: .8, translateX: 30, opacity: 0 });
    tl.from('.aside', { duration: .5, translateY: 30, opacity: 0 });
    tl.from('.aZoom', { duration: .5, translateX: -30, opacity: 0 });
    tl.to('.img', { clipPath: "polygon(0 0, 100% 0 , 100% 100%, 0% 100%)" }, '-=1');
} */

barba.init({
    /* sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();
            pageTransition();
            await delay(1500);
            done();
        },

        async enter(data) {
            contentAnimation();
        },

        async once(data) {
            contentAnimation();
        }
    }] */

    transitions: [
        {
            name: 'default',
            async leave(data) {
                await gsap.to(data.current.container, { opacity: 0, duration: .5 });
                console.log('leave');
            },
            async enter(data) {
                await gsap.to(data.next.container, { opacity: 1, duration: .5 });
                console.log('enter');
            },
        },
    ],
});

barba.hooks.after(async () => {
    await restartWebflow();
});


