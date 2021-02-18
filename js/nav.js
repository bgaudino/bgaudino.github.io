const mobileTabs = `
<ul class="nav nav-tabs">
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Music</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="music.html">Classical</a></li>
            <li><a class="dropdown-item" href="">Jazz</a></li>
            <li><a class="dropdown-item" href="major3rds.html">Major 3rds Tuning</a></li>
            <li><a class="dropdown-item" href="">Electronic</a></li>
            <li><a class="dropdown-item" href="">Scores</a></li>
        </ul>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Education</a>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="education.html">Bio</a></li>
            <li><a class="dropdown-item" href="#">Student Projects</a></li>
            <li><a class="dropdown-item" href="scores.html">Scores</a></li>
            <li><a class="dropdown-item" href="teaching.html">Teaching Philosophy</a></li>
            <li><a class="dropdown-item" href="#">Testimonials</a></li>
            <li><a class="dropdown-item" href="#">Media Appearances</a></li>
        </ul>
    </li>
    <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Development</a>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="scale.html">Scale Calculator</a></li>
        <li><a class="dropdown-item" href="interval.html">Interval Calculator</a></li>
        <li><a class="dropdown-item" href="chord.html">Chord Calculator</a></li>
        <li><a class="dropdown-item" href="note_id.html">Note Identification</a></li>
        <li><a class="dropdown-item" href="scratch.html">Guitar Shark</a></li>
        </ul>
    </li>

</ul>`;

const mobileHeader = `<h1 id="mobileTitle" style="text-align: center;">Brian Gaudino</h1>`;

let mql = window.matchMedia('(max-width: 1200px)');

function tabs() {
        let header = document.querySelector('#header');
        let tabs = document.querySelector('#tabs');
        let mobile = document.querySelector('#mobileTabs');
        let mobileHeader = document.querySelector('#mobileHeader');
    if (mql.matches) {
        header.className = 'hidden';
        tabs.className = 'hidden';
        mobile.innerHTML = mobileTabs;
        mobile.className = '';
        mobileHeader.className = 'nav navbar';

        
    } else {
        header.className = 'nav navbar';
        tabs.className = '';
        mobile.className = 'hidden';
        mobileHeader.className = 'hidden';
    }
}

mql.addEventListener('change', tabs);
document.addEventListener('DOMContentLoaded', tabs);



