"use strict";
(() => {
    let nivelDeAudio;
    (function (nivelDeAudio) {
        nivelDeAudio[nivelDeAudio["min"] = 0] = "min";
        nivelDeAudio[nivelDeAudio["med"] = 1] = "med";
        nivelDeAudio[nivelDeAudio["max"] = 2] = "max";
    })(nivelDeAudio || (nivelDeAudio = {}));
    let nivelAceleracion;
    (function (nivelAceleracion) {
        nivelAceleracion[nivelAceleracion["minima"] = 10] = "minima";
        nivelAceleracion[nivelAceleracion["media"] = 11] = "media";
        nivelAceleracion[nivelAceleracion["alta"] = 100] = "alta";
    })(nivelAceleracion || (nivelAceleracion = {}));
    let audioActual = nivelDeAudio.med;
    console.log(nivelDeAudio);
    console.log({ nivelAceleracion });
})();
