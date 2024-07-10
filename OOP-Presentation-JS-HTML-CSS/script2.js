// Ορίζουμε τις μεταβλητές για τα κουμπιά
const backwardButton = document.querySelector('.backward-button');
const forwardButton = document.querySelector('.forward-button');

// Ορίζουμε τη μεταβλητή για το κουμπί δημιουργίας αυτοκινήτου
const createCarButton = document.getElementById('createCar');

// Συνάρτηση για δημιουργία αντικειμένου Car
function createCar() {
    const brand = document.getElementById('brand').value ;
    const model = document.getElementById('model').value ;
    const color = document.getElementById('color').value ;
    if( brand==='' || brand===null){return;}
    if( model==='' || model===null){return;}
    if( color==='' || color===null){return;}
    const car = {
        brand: brand,
        model: model,
        color: color
    };

    // Εμφάνιση των χαρακτηριστικών του αντικειμένου που δημιουργήθηκε
    const carDetails = document.getElementById('carDetails');
    carDetails.textContent = `Δημιουργήθηκε αυτοκίνητο: Μάρκα: ${car.brand}, Μοντέλο: ${car.model}, Χρώμα: ${car.color}`;
}

// Συνδέουμε τη συνάρτηση δημιουργίας αυτοκινήτου με το κουμπί
createCarButton.addEventListener('click', createCar);

// Συνάρτηση για ανακατεύθυνση στην στατική σελίδα html2
function goToHtml2() {
    window.location.href = 'index.html';
    localStorage.setItem('go_back', 'true');
    
}

// Συνάρτηση για ανακατεύθυνση στην στατική σελίδα html3
function goToHtml3() {
    window.location.href = 'index.html';
    localStorage.setItem('go_forward', 'true');
}

// Σύνδεση των συναρτήσεων ανακατεύθυνσης με τα κουμπιά "Πίσω" και "Μπροστά"
backwardButton.addEventListener('click', goToHtml2);
forwardButton.addEventListener('click', goToHtml3);