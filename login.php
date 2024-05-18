<?php
// Form submit edildiğinde
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Kullanıcı adı ve şifre değişkenlerini al
    $kullanici = $_POST['kullanici'];
    $sifre = $_POST['şifre'];
    
    // Doğru kullanıcı adı ve şifreyi belirle
    $dogru_kullanici = 'merve.yilmaz45@ogr.sakarya.edu.tr';
    $dogru_sifre = 'g231210091';
    
    // Kullanıcı adı ve şifre kontrolü yap
    if ($kullanici == $dogru_kullanici && $sifre == $dogru_sifre) {
        // Başarılı giriş
        echo "Hoşgeldin, $kullanici! Şifreniz: $sifre";
    } else {
        // Başarısız giriş
        echo "Kullanıcı adı veya şifre hatalı!";
    }
}
?>