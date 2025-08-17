const firebaseConfig = {
    apiKey: "AIzaSyAQjS5kGbOl3sUlY2PWBWUh4B03W_DiiUs",
    authDomain: "responsive-376f1.firebaseapp.com",
    databaseURL: "https://responsive-376f1-default-rtdb.firebaseio.com",
    projectId: "responsive-376f1",
    storageBucket: "responsive-376f1.firebasestorage.app",
    messagingSenderId: "349251929222",
    appId: "1:349251929222:web:526bfbaa2d5156f23fbd07",
    measurementId: "G-906S6M70VS"
  };

firebase.initializeApp(firebaseConfig);
const responsiveDB = firebase.database().ref("responsive");

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    const data = {
        firstName: getElementVal("firstName"),
        lastName: getElementVal("lastName"),
        email: getElementVal("email"),
        phone: getElementVal("phone"),
        country: getElementVal("country"),
        deliveryMode: getElementVal("deliveryMode"),
        englishLevel: getElementVal("englishLevel"),
        consent: document.getElementById("consent").checked
    };

    responsiveDB.push(data)
        .then(() => {
            alert("Form submitted successfully!");
            document.getElementById("form").reset();
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
        });
}

function getElementVal(id) {
    return document.getElementById(id).value;
}