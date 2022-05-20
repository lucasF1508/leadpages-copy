import anime from 'animejs';

export function animateIntroComplex({
  robie,
  leftArm,
  rightArm,
  scanner,
  nonColorPage,
  eyes,
  head,
  cb = () => {}
}) {
  const intro = anime.timeline({
    complete: cb
  });
  return intro
    .add({
      targets: leftArm,
      rotate: [-30, -200],
      duration: 600,
      elasticity: 100,
      easing: 'easeInOutSine'
    })
    .add({
      targets: rightArm,
      rotate: [30, 35],
      duration: 600,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })
    .add({
      targets: head,
      rotate: 3,
      duration: 600,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })
    .add({
      targets: robie,
      rotate: 3,
      duration: 600,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })

    .add({
      targets: leftArm,
      rotate: [-200, -160],
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine'
    })
    .add({
      targets: rightArm,
      rotate: [35, 30],
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=400'
    })
    .add({
      targets: head,
      rotate: 0,
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=400'
    })
    .add({
      targets: robie,
      rotate: 0,
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })

    .add({
      targets: leftArm,
      rotate: [-160, -200],
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine'
    })
    .add({
      targets: rightArm,
      rotate: [30, 35],
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=400'
    })
    .add({
      targets: head,
      rotate: 3,
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=400'
    })
    .add({
      targets: robie,
      rotate: 3,
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })

    .add({
      targets: leftArm,
      rotate: -30,
      duration: 750,
      elasticity: 100,
      easing: 'easeInOutSine'
    })
    .add({
      targets: head,
      rotate: 0,
      duration: 500,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=750'
    })
    .add({
      targets: robie,
      rotate: 0,
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })
    .add({
      targets: rightArm,
      rotate: 30,
      duration: 750,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=750'
    })
    .add({
      targets: eyes,
      translateX: [0, -5],
      duration: 400,
      elasticity: 100,
      easing: 'easeInOutSine'
    });
}
export function animateIntroSimple({
  robie,
  leftArm,
  rightArm,
  scanner,
  nonColorPage,
  eyes,
  head,
  cb = () => {}
}) {
  const intro = anime.timeline({
    complete: cb
  });
  return intro.add({
    targets: eyes,
    translateX: [0, -5],
    duration: 400,
    elasticity: 100,
    easing: 'easeInOutSine'
  });
}
export function animateIntro({
  robie,
  leftArm,
  rightArm,
  scanner,
  nonColorPage,
  eyes,
  head,
  cb = () => {}
}) {
  const introWithWave = anime.timeline({
    complete: cb
  });
  return introWithWave
    .add({
      targets: leftArm,
      rotate: [-30, -200],
      duration: 600,
      elasticity: 100,
      easing: 'easeInOutSine'
    })
    .add({
      targets: rightArm,
      rotate: [30, 35],
      duration: 600,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })
    .add({
      targets: head,
      rotate: 3,
      duration: 600,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })
    .add({
      targets: robie,
      rotate: 3,
      duration: 600,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })

    .add({
      targets: leftArm,
      rotate: [-200, -160],
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine'
    })
    .add({
      targets: rightArm,
      rotate: [35, 30],
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=400'
    })
    .add({
      targets: head,
      rotate: 0,
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=400'
    })
    .add({
      targets: robie,
      rotate: 0,
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })

    .add({
      targets: leftArm,
      rotate: [-160, -200],
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine'
    })
    .add({
      targets: rightArm,
      rotate: [30, 35],
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=400'
    })
    .add({
      targets: head,
      rotate: 3,
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=400'
    })
    .add({
      targets: robie,
      rotate: 3,
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })

    .add({
      targets: leftArm,
      rotate: -30,
      duration: 750,
      elasticity: 100,
      easing: 'easeInOutSine'
    })
    .add({
      targets: head,
      rotate: 0,
      duration: 500,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=750'
    })
    .add({
      targets: robie,
      rotate: 0,
      duration: 300,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=600'
    })
    .add({
      targets: rightArm,
      rotate: 30,
      duration: 750,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=750'
    })
    .add({
      targets: eyes,
      translateX: [0, -5],
      duration: 400,
      elasticity: 100,
      easing: 'easeInOutSine'
    });
}
export function animateScanning({
  robie,
  leftArm,
  rightArm,
  scanner,
  nonColorPage,
  currentColorPage,
  eyes,
  head,
  cb = () => {}
}) {
  const scanning = anime.timeline({
    complete: cb
  });
  return scanning
    .add({
      delay: 400,
      targets: scanner,
      d: [
        'M 210.043,20 L 107.72,18 L 0,18 L 182.479,20 L 210.043,20 Z',
        'M 210.043,20 L 107.72,96 L 0,96 L 182.479,20 L 210.043,20 Z'
      ],
      duration: 750,
      elasticity: 100,
      easing: 'easeInOutSine'
    })
    .add({
      targets: eyes,
      translateY: [0, 5],
      translateX: [-5, -5],
      duration: 750,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=750'
    })
    .add({
      targets: head,
      rotate: -10,
      duration: 750,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=750'
    })
    .add({
      targets: currentColorPage,
      height: [0, 81],
      duration: 750,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=750'
    })
    .add({
      targets: scanner,
      d: [
        'M 210.043,20 L 107.72,96 L 0,96 L 182.479,20 L 210.043,20 Z',
        'M 210.043,20 L 107.72,18 L 0,18 L 182.479,20 L 210.043,20 Z'
      ],
      duration: 1000,
      elasticity: 100,
      easing: 'easeInOutSine',
      delay: 150
    })
    .add({
      targets: eyes,
      translateY: [5, 0],
      translateX: [-5, -5],
      duration: 1000,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=1000'
    })
    .add({
      targets: head,
      rotate: 0,
      duration: 1000,
      elasticity: 100,
      easing: 'easeInOutSine',
      offset: '-=1000'
    })
    .add({
      targets: eyes,
      scaleY: 0.1,
      translateX: [-5, -5],
      duration: 100,
      elasticity: 100,
      easing: 'easeInSine'
    })
    .add({
      targets: eyes,
      scaleY: 1,
      translateX: [-5, -5],
      translateY: 0,
      duration: 100,
      elasticity: 100,
      easing: 'easeOutSine'
    });
}

export function animateFailed({
  robie,
  leftArm,
  rightArm,
  scanner,
  nonColorPage,
  eyes,
  head,
  cb = () => {}
}) {
  const failed = anime.timeline({
    complete: cb
  });
  return failed
    .add({
      targets: robie,
      rotate: -8,
      duration: 1500,
      elasticity: 750,
      offset: 0
      // easing: "easeInOutSine",
    })
    .add({
      targets: scanner,
      d: 'M 210.043,20 L 107.72,18 L 0,18 L 182.479,20 L 210.043,20 Z',
      duration: 0,
      offset: 0
    })
    .add({
      targets: nonColorPage,
      'clip-path': 'inset(-1px 0px 0px 0px)',
      duration: 0,
      offset: 0
    })
    .add({
      targets: eyes,
      translateX: 0,
      translateY: 0,
      duration: 1500,
      elasticity: 0,
      offset: 0
      // easing: "easeInOutSine",
    })
    .add({
      targets: leftArm,
      rotate: -12,
      duration: 1500,
      elasticity: 600,
      offset: 0
      // easing: "easeInOutSine",
    })
    .add({
      targets: rightArm,
      rotate: 12,
      duration: 1500,
      elasticity: 600,
      // easing: "easeInOutSine",
      offset: 0
    })
    .add({
      targets: head,
      rotate: -38,
      duration: 1500,
      elasticity: 0,
      // easing: "easeInOutSine",
      offset: 0
    })
    .add({
      targets: nonColorPage,
      rotate: -30,
      translateY: [17, 17],
      duration: 1500,
      elasticity: 400,
      // easing: "easeInOutSine",
      offset: 0
    })
    .add({
      targets: eyes,
      scaleY: 0.1,
      translateX: [-5, -5],
      duration: 100,
      elasticity: 0,
      easing: 'easeInSine'
    });
}
