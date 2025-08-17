const firebaseConfig = {
    apiKey: "AIzaSyAVFtv11WlQR09biOXNkfQ7LgnENOM91oo",
    authDomain: "responsivedb-cb72a.firebaseapp.com",
    databaseURL: "https://responsivedb-cb72a-default-rtdb.firebaseio.com",
    projectId: "responsivedb-cb72a",
    storageBucket: "responsivedb-cb72a.firebasestorage.app",
    messagingSenderId: "865110840242",
    appId: "1:865110840242:web:5ae476d0c556d6b20fcaab",
    measurementId: "G-NGQGG975M3"
  };

firebase.initializeApp(firebaseConfig);
const responsiveDB = firebase.database().ref("responsivedb");

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