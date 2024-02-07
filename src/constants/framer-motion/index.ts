export const animateLeftX = {
    visible: (custom : number)  => ({
        x:0,
        opacity: 1,
        transition: { duration: custom * 0.4 } }),
    hidden: { x:-200, opacity: 0 }
};

export const animateRightX = {
    visible:{
        x:0,
        opacity: 1,
        transition: { duration: 1, delay: 0.5} },
    hidden: { x:200, opacity: 0 }
};

export const animateY = {
    visible:  {
        y:0,
        opacity: 1,
        transition: { duration: 1} },
    hidden: { y:100, opacity: 0 }
};

export const animateOpacity = {
    visible:  {
        opacity: 1,
        transition: { duration: 2, delay: 0.3} },
    hidden: {opacity: 0}
};