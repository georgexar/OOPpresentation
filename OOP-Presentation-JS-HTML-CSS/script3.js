const backwardButton = document.querySelector('.backward-button');
const forwardButton = document.querySelector('.forward-button');

document.addEventListener('DOMContentLoaded', function() {
    const createSelfInfoButton = document.getElementById('CreateSelfInfo');
    const selfInfoDetails = document.getElementById('SelfInfoDetails');
    
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>Τα λάθη που έκανες</h2>
            <div id="errorMessages"></div>
        </div>
        <button onclick="closePopup()">Κλείσιμο</button>
    `;
    document.body.appendChild(popup);
    
    createSelfInfoButton.addEventListener('click', function() {
        // Παίρνουμε τις τιμές από τα input fields
        const namePriv1 = document.getElementById('namePriv1').value.trim();
        const namePriv2 = document.getElementById('namePriv2').value.trim();
        const agePriv1 = document.getElementById('agePriv1').value.trim();
        const professionPriv1 = document.getElementById('professionPriv1').value.trim();
        const professionPriv2 = document.getElementById('professionPriv2').value.trim();
        const returnPriv1 = document.getElementById('returnPriv1').value.trim();
        const stringPriv1 = document.getElementById('stringPriv1').value.trim();
        const intPriv1 = document.getElementById('intPriv1').value.trim();
        const name1 = document.getElementById('name1').value.trim();
        const age1 = document.getElementById('age1').value.trim();
        const profession1 = document.getElementById('profession1').value.trim();

        // Έλεγχος αν οι τιμές είναι ακριβώς οι λέξεις "name", "age" και "profession"
        let errors = [];
        if (namePriv1 !== 'name') errors.push('Το πρώτο κενό πρέπει να είναι "name".');
        if (professionPriv1 !== 'profession') errors.push('Το δεύτερο κενό πρέπει να είναι "profession".');
        if (professionPriv2 !== 'profession') errors.push('Το τρίτο κενό πρέπει να είναι "profession".');
        if (namePriv2 !== 'name') errors.push('Το τέταρτο κενό πρέπει να είναι "name".');
        if (agePriv1 !== 'age') errors.push('Το πέμπτο κενό πρέπει να είναι "age".');
        if (stringPriv1 !== 'String') errors.push('Το έκτο κενό πρέπει να είναι "String".');
        if (intPriv1 !== 'int') errors.push('Το έβδομο κενό πρέπει να είναι "int".');
        if (returnPriv1 !== 'return') errors.push('Το όγδοο κενό πρέπει να είναι "return".');
        if (name1 === '') errors.push('Το ένατο κενό δεν πρέπει να είναι κενό.');
        if (age1 === '') errors.push('Το δέκατο κενό πρέπει να είναι αριθμός τύπου "int".');
        if (profession1 === '') errors.push('Το ενδέκατο κενό δεν πρέπει να είναι κενό.');
        if (errors.length === 0) {
            selfInfoDetails.textContent = `Ονομάζομαι ${name1}, είμαι ${age1} χρονών και είμαι ${profession1}.`;
        } else {
            selfInfoDetails.textContent = 'Εισήχθησαν λάθος λέξεις. Παρακαλώ ελέγξτε ξανά.';
            const errorMessages = document.getElementById('errorMessages');
            errorMessages.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
            popup.style.display = 'block';
        }
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Συνάρτηση για ανακατεύθυνση στην στατική σελίδα html2
function goToHtml22() {
    window.location.href = 'index.html';
    localStorage.setItem('go_back2', 'true');
}

// Συνάρτηση για ανακατεύθυνση στην στατική σελίδα html3
function goToHtml33() {
    window.location.href = 'index.html';
    localStorage.setItem('go_forward2', 'true');
}

// Σύνδεση των συναρτήσεων ανακατεύθυνσης με τα κουμπιά "Πίσω" και "Μπροστά"
backwardButton.addEventListener('click', goToHtml22);
forwardButton.addEventListener('click', goToHtml33);