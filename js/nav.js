var mql = window.matchMedia('(max-width: 1200px)');

const desktop = `<ul class="nav nav-tabs" id="tabs">
<li class="nav-item active"><a class="nav-link" href="scale.html">Scale Calculator</a></li>
<li class="nav-item"><a class="nav-link" href="interval.html">Interval Calculator</a></li>
<li class="nav-item"><a class="nav-link" href="chord.html">Chord Calculator</a></li>
<li class="nav-item"><a class="nav-link" href="note_id.html">Note Identification</a></li>
<li class="nav-item"><a class="nav-link" href="eartraining.html">Interval Ear Training</a></li>
<li class="nav-item"><a class="nav-link" href="scratch.html">Guitar Shark</a></li></ul>`

const mobile = `
<ul class="nav nav-tabs">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Music</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="scale.html">Scale Calculator</a></li>
            <li><a class="dropdown-item" href="interval.html">Interval Calculator</a></li>
            <li><a class="dropdown-item" href="chord.html">Chord Calculator</a></li>
            <li><a class="dropdown-item" href="note_id.html">Note Identification</a></li>
            <li><a class="dropdown-item" href="eartraining.html">Interval Ear Training</a></li>
            <li><a class="dropdown-item" href="scratch.html">Guitar Shark</a></li>
        </ul>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Education</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Separated link</a></li>
        </ul>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Development</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="scale.html">Scale Calculator</a></li>
            <li><a class="dropdown-item" href="interval.html">Interval Calculator</a></li>
            <li><a class="dropdown-item" href="chord.html">Chord Calculator</a></li>
            <li><a class="dropdown-item" href="note_id.html">Note Identification</a></li>
            <li><a class="dropdown-item" href="eartraining.html">Interval Ear Training</a></li>
            <li><a class="dropdown-item" href="scratch.html">Guitar Shark</a></li>
        </ul>
    </li>

</ul>`;







document.addEventListener('DOMContentLoaded', function(mql) {
    if (mql.matches) {
        document.querySelector('#tabs').innerHTML = mobile;
    } else {
        document.querySelector('#tabs').innerHTML = desktop;
    }
});

mql.addEventListener('change', (e) => {
    if (e.matches) {
        document.querySelector('#tabs').innerHTML = mobile;
    } else {
        document.querySelector('#tabs').innerHTML = desktop;
    }
});


