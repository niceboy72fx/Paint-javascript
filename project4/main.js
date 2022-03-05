window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext("2d");

    // resize

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    // variables
    let painting = false;

    function start() {
        painting = true;
    }

    function finished() {
        painting = false;
        ctx.beginPath(); // start new paint
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.lineTo(e.clientX, e.clientY) // draw
        ctx.stroke(); // draw
        ctx.beginPath(); // draw small round
        ctx.moveTo(e.clientX, e.clientY);
    }
    //EventListeners
    canvas.addEventListener('mousedown', start);
    canvas.addEventListener('mouseup', finished);
    canvas.addEventListener('mousemove', draw);

});