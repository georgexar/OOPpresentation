// Ορίζουμε τις μεταβλητές για την εικόνα και τα κουμπιά
const imageElement = document.querySelector('.image-container img');
const backwardButton = document.querySelector('.backward-button');
const forwardButton = document.querySelector('.forward-button');

// Λίστα με τα URLs των εικόνων
const imageList = [
    "slide1.png",
    "slide2.png",
    "slide3.png",
    "slide4.png",
    "slide5.png",
    "slide6.png",
    "slide7.png",
    "finalslide.png"
];

// Αρχικοποίηση του index για την πρώτη εικόνα
let currentIndex = 0;

imageElement.src = imageList[currentIndex];

// Απενεργοποιούμε το κουμπί "Πίσω" αρχικά αν η πρώτη εικόνα είναι εμφανής
if (currentIndex === 0) {
    backwardButton.disabled = true;
}

document.addEventListener('DOMContentLoaded', ()=> {

    if(localStorage.getItem('go_back')==='true') {
        currentIndex = 5;
        imageElement.src = imageList[currentIndex];
        localStorage.removeItem('go_back');
        backwardButton.disabled = false;
    }

    return;
});

document.addEventListener('DOMContentLoaded', ()=> {
    
    if(localStorage.getItem('go_forward')==='true') {
        currentIndex = 6;
        imageElement.src = imageList[currentIndex];
        localStorage.removeItem('go_forward');
        if (currentIndex === imageList.length - 1) {
            forwardButton.disabled = true;
        } else {
            forwardButton.disabled = false;
        }
        backwardButton.disabled = false;
    
    }

    return;
});

document.addEventListener('DOMContentLoaded', ()=> {

    if(localStorage.getItem('go_back2')==='true') {
        currentIndex = 6;
        imageElement.src = imageList[currentIndex];
        localStorage.removeItem('go_back2');
        backwardButton.disabled = false;
    }

    return;
});

document.addEventListener('DOMContentLoaded', ()=> {
    
    if(localStorage.getItem('go_forward2')==='true') {
        currentIndex = 7;
        imageElement.src = imageList[currentIndex];
        localStorage.removeItem('go_forward2');
        if (currentIndex === imageList.length - 1) {
            forwardButton.disabled = true;
        } else {
            forwardButton.disabled = false;
        }
        backwardButton.disabled = false;
    
    }

    return;
});




// Συνάρτηση για αλλαγή της εικόνας προς τα πίσω
function changeImageBackward() {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    
    if(currentIndex===5){ window.location.href = 'interactive.html';}
    else if(currentIndex===6){ window.location.href = 'interactive2.html';}
    else{
    imageElement.src = imageList[currentIndex];
    }
    // Αν η νέα εικόνα είναι η πρώτη, απενεργοποιούμε το κουμπί "Πίσω"
    if (currentIndex === 0) {
        backwardButton.disabled = true;
    } else {
        backwardButton.disabled = false;
    }
     // Ενεργοποιούμε το κουμπί "Προς τα εμπρός" αν είναι απενεργοποιημένο
     forwardButton.disabled = false;
}

// Συνάρτηση για αλλαγή της εικόνας προς τα εμπρός
function changeImageForward() {
    currentIndex = (currentIndex + 1) % imageList.length;
    if(currentIndex===6){ window.location.href = 'interactive.html';}
    else if(currentIndex===7){ window.location.href = 'interactive2.html';}
    else{
    imageElement.src = imageList[currentIndex];
    }
     // Αν η νέα εικόνα είναι η τελευταία, απενεργοποιούμε το κουμπί "Προς τα εμπρός"
     if (currentIndex === imageList.length - 1) {
        forwardButton.disabled = true;
    } else {
        forwardButton.disabled = false;
    }
    
    // Ενεργοποιούμε το κουμπί "Πίσω" αν είναι απενεργοποιημένο
    backwardButton.disabled = false;
}

// Συνδέουμε τις συναρτήσεις με τα κουμπιά
backwardButton.addEventListener('click', changeImageBackward);
forwardButton.addEventListener('click', changeImageForward);
