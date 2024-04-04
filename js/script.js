    document.getElementById("bmiForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  //Mengambil data input pengguna
  var gender = document.querySelector('input[name="gender"]:checked');
  var berat = parseFloat(document.getElementById("berat").value);
  var tahun = parseInt(document.getElementById("tahun").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value) / 100;
  
  //BMI Pria dan Wanita Sama (Kecuali MIT) Cek: https://t.ly/a_5q6
  var bmi = berat / (tinggi * tinggi);

 // Apakah gender diisi?
 if (!gender) {
   // Menampilkan alert jika gender kosong
   alert('Jenis kelamin tidak boleh kosong!');
   return;
 }

 //Rentang skor dalam kategori BMI  
  var kategori;
  if (bmi < 18.5) {
      kategori = "Kurus";
  } else if (bmi >= 18.5 && bmi < 24.9) {
      kategori = "Normal";
  } else if (bmi >= 25 && bmi < 29.9) {
      kategori = "Gemuk";
  } else {
      kategori = "Obesitas";
  }

  // Memberikan keterangan 
  var keterangan;
  switch (kategori) {
      case "Kurus":
          keterangan = "Berat badan Anda rendah.";
          break;
      case "Normal":
          keterangan = "Berat badan Anda ideal.";
          break;
      case "Gemuk":
          keterangan = "Anda tergolong overweight.";
          break;
      case "Obesitas":
          keterangan = "Anda tergolong obesitas. Segera konsultasikan dengan dokter untuk mendapatkan saran kesehatan yang tepat.";
          break;
  }

  //Berisi pesan mengenai apa yang haris dilakukan jika kita tergolong dalam rentang tersebut
  var informasi;
  switch(kategori){
    case "Kurus":
          informasi = "Hasil BMI kurang dari 18,5.\n\n Utamakan hidup sehat dan perhatikan konsumsi harian. Konsultasikan dengan dokter untuk mengetahui apakah berat badan Anda sudah ideal. Berat rendah dapat menyebabkan berbagai masalah penyakit diantaranya: anemia, osteoporosis, sistem imun lemah, dll.";
          break;
      case "Normal":
          informasi = "Hasil BMI diantara 18,5 dan 24,9.\n\n BMI anda tergolong sehat, pastikan asupan kalori sesuai dengan kebutuhan kalori harian & konsumsi makanan sehat.";
          break;
      case "Gemuk":
          informasi = "Hasil BMI diantara 25 dan 29,9.\n\n Sebaiknya perhatikan pola makan dan berolahraga teratur untuk mencapai berat badan ideal. Utamakan hidup sehat dan perhatikan konsumsi harian. Beberapa penyakit yang berasal dari kegemukan diantaranya: Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis, dll.";
          break;
      case "Obesitas":
          informasi = "Hasil BMI lebih dari 30.\n\n Anda tergolong obesitas. Segera konsultasikan dengan dokter untuk mendapatkan saran kesehatan yang tepat. Beberapa penyakit yang berasal dari kegemukan diantaranya: Diabetes, Hipertensi, Sakit Jantung, Osteoarthritis, dll.";
          break;
  }
  
  // Update elemen HTML dengan nilai BMI dan kategori
  document.getElementById("bmiValue").innerText = bmi.toFixed(2);
  document.getElementById("bmiCategory").innerText = kategori;
  document.getElementById("keterangan").innerText = keterangan;

  document.getElementById("informasi").innerText = informasi;
});
