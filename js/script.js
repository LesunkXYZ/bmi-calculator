document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var gender = document.getElementById("gender").value;
    var berat = parseFloat(document.getElementById("berat").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value) / 100; // Convert tinggi to meter
    
    var bmi = berat / (tinggi * tinggi);
    
    var hasil = "";
    if (gender === "pria") {
        if (bmi < 18.5) {
            hasil = "BMI Anda: " + bmi.toFixed(2) + " (Kurus)";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            hasil = "BMI Anda: " + bmi.toFixed(2) + " (Normal)";
        } else if (bmi >= 25 && bmi < 29.9) {
            hasil = "BMI Anda: " + bmi.toFixed(2) + " (Gemuk)";
        } else {
            hasil = "BMI Anda: " + bmi.toFixed(2) + " (Obesitas)";
        }
    } else if (gender === "wanita") {
        if (bmi < 18.5) {
            hasil = "BMI Anda: " + bmi.toFixed(2) + " (Kurus)";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            hasil = "BMI Anda: " + bmi.toFixed(2) + " (Normal)";
        } else if (bmi >= 25 && bmi < 29.9) {
            hasil = "BMI Anda: " + bmi.toFixed(2) + " (Gemuk)";
        } else {
            hasil = "BMI Anda: " + bmi.toFixed(2) + " (Obesitas)";
        }
    }

    var keterangan;
    switch (kategori) {
    case "Kurus":
    keterangan = "Anda tergolong kurus. Konsultasikan dengan dokter untuk mengetahui apakah berat badan Anda sudah ideal.";
    break;
    case "Normal":
    keterangan = "Selamat! Berat badan Anda ideal.";
    break;
    case "Gemuk":
    keterangan = "Anda tergolong overweight. Sebaiknya perhatikan pola makan dan berolahraga teratur untuk mencapai berat badan ideal.";
    break;
    case "Obesitas":
    keterangan = "Anda tergolong obesitas. Segera konsultasikan dengan dokter untuk mendapatkan saran kesehatan yang tepat.";
    break;
}

    function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "Hasil BMI kurang dari 18,5";
    } else if (bmi >= 18.5 && bmi < 23) {
      return "Hasil BMI di antara 18,5 dan 23";
    } else if (bmi >= 23 && bmi < 25) {
      return "Hasil BMI di antara 23 dan 25";
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Hasil BMI di antara 25 dan 29";
    } else {
      return "Hasil BMI di lebih dari 30";
    }
  }
  
    
    // Update elemen HTML dengan nilai BMI dan kategori
    document.getElementById("berat-value").innerText = berat;
    document.getElementById("tinggi-value").innerText = tinggi;
    document.getElementById("bmiValue").innerText = bmi.toFixed(2);
    document.getElementById("bmiCategory").innerText = kategori;
    document.getElementById("keterangan").innerText = keterangan;

    var berat = parseFloat(document.getElementById("berat").value);
var tinggi = parseFloat(document.getElementById("tinggi").value);
    
});
