async function play(arr, octave, display, location, method) {

    for (let i = 0; i < arr.length; i++) {
      $(location).html(display[i]);
      Synth.play(0, arr[i], octave[i], 2);
      display[i]+= ' '
      await sleep(700);
    } $(location.trim()).html(display);
}
