AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#animated-model");
        const aEntityb = document.querySelector("#animated-model2");
        const aEntityc = document.querySelector("#animated-model3");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                window.location.href = 'red.html';
            }
        });
        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntityb && intersectedElement === aEntityb) {
                window.location.href = 'green.html';
            }
        });
        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntityc && intersectedElement === aEntityc) {
                window.location.href = 'blue.html';
            }
        });
}});

/*
AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntitya = document.querySelector("#animated-model-1");
        const aEntity2 = document.querySelector("#animated-model-2");
        const aEntity3 = document.querySelector("#animated-model-3");

        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntitya && intersectedElement === aEntitya) {
                window.location.href = 'red.html';
            }
        });
        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntityb && intersectedElement === aEntityb) {
                window.location.href = 'green.html';
            }
        });
        // every click, we make our model grow in size :)
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntityc && intersectedElement === aEntityc) {
                window.location.href = 'blue.html';
            }
        });
}});
*/