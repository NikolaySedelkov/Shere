let lastTouch;

function decomposeTouch({clientX, clientY}){
    return {
        x: clientX,
        y: clientY
    }
}

const SCALE = 2500;

var isClick = false;

export function swap(canvas, direction, scale){
    canvas.addEventListener('touchstart', function(e) {
        lastTouch = decomposeTouch(e.targetTouches[0])
    });
    canvas.addEventListener('touchmove', function(e) {
        let currentTouch = decomposeTouch(e.touches[0]);
        direction.x = (currentTouch.x-lastTouch.x) / SCALE
        direction.y = (currentTouch.y-lastTouch.y) / SCALE;
        //lastTouch = currentTouch;
    });

    canvas.addEventListener("mousedown",  function(e) {
        isClick = true;
        lastTouch = decomposeTouch(e);
    });

    canvas.addEventListener("mousemove",  function(e) {
        let currentTouch = decomposeTouch(e);
        if(isClick){
            direction.x = (currentTouch.x-lastTouch.x) / SCALE;
            direction.y = (currentTouch.y-lastTouch.y) / SCALE;
        }
    });

    canvas.addEventListener("mouseup", ()=>{isClick = false;});

    canvas.addEventListener("mouseout", ()=>{isClick = false;});

    canvas.addEventListener("wheel", event => {
        if(scale.value + event.wheelDelta / 1000 > 0.1)
            scale.value += event.wheelDelta / 1000;
        else
            scale.value = 0.1
    });
    
}