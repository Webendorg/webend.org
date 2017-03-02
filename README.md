# 90 Pixel Front End Starter Kit

## Kurulum

1. Starter Kit'in güncel halini gitlab.90pixel.net üzerinden indirebilirsiniz

2. Projemizi oluşturalım
```bash
  rm -rf .git                 // komutu ile proje bağımlılığını ortadan kaldırabilirsiniz
  git init                    // komutu ile repo'yu oluşturalım
  git add -A                  // komutu ile dosyaları commit'e ekleyelim
  git commit -m "İlk Commit"  // İlk commitimizi gönderelim
```

3. Proje bağımlılıklarını indirelim
```bash
  sudo npm install
```

4. Gulp'ın projeyi aktif getirmesi için aşağıdaki komutları kullanıyoruz
```bash
  gulp build
  gulp serve
```

### Gulp Taskları

#### gulp build
Projenin çalışma ortamını hazırlar.

#### gulp serve
Geliştirme modunda twig, sass, resim, font ve javascript dosyalarının izlenmesi ve derlenmesini sağlar. Ayrıca configs.js dosyasında belirtilen port üzerinden yayın gerçekleştirir.
