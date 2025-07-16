# Bahadır Perveli - Portfolio Website

Modern ve responsive bir kişisel portfolio websitesi. Bu proje Bahadır Perveli'nin yazılım geliştirici olarak deneyimlerini, becerilerini ve projelerini sergileyen profesyonel bir web sitesidir.

## 🚀 Kurulum

1. Projeyi bilgisayarınıza indirin
2. `index.html` dosyasını bir web tarayıcısında açın
3. **EmailJS SMTP Kurulumu (İsteğe Bağlı)**:
   - [EmailJS](https://www.emailjs.com/) sitesinde ücretsiz hesap oluşturun
   - Email servisinizi (Gmail, Outlook, vb.) bağlayın
   - `script.js` dosyasında aşağıdaki değerleri güncelleyin:
     ```javascript
     emailjs.init("your_public_key"); // Public Key'inizi buraya ekleyin
     emailjs.send('your_service_id', 'your_template_id', templateParams)
     ```
   - EmailJS kurulumu yapılmazsa, contact form mailto linkiyle çalışacaktır

## 🚀 Özellikler

- ✨ Modern ve temiz tasarım
- 📱 Tam responsive tasarım (mobil uyumlu)
- 🌙 Dark/Light mode toggle
- ⚡ Hızlı yükleme ve performans optimizasyonu
- 🎯 Smooth scrolling ve animasyonlar
- 📧 **SMTP Email Entegrasyonu** (EmailJS ile)
- 🎨 Gradient renk paleti
- 📊 İnteraktif beceri kartları
- ⏱️ Deneyim bölümünde akıllı tab sistemi
- 🎭 Detaylı proje showcase'i
- 📞 Otomatik contact bilgisi kopyalama
- 🎨 Hover animasyonları ve micro-interactions

## 🛠️ Teknolojiler

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS özellikleri, CSS Grid, Flexbox
- **Vanilla JavaScript** - Framework kullanmadan saf JavaScript
- **Font Awesome** - İkonlar için
- **Google Fonts** - Inter font ailesi

## 📁 Proje Yapısı

```
portfolio-website/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
└── README.md          # Bu dosya
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary:** #2563eb (Mavi)
- **Secondary:** #1e40af (Koyu Mavi)
- **Accent:** #3b82f6 (Açık Mavi)
- **Gradient:** Linear gradient (135deg, #667eea 0%, #764ba2 100%)

### Typography
- **Font Family:** Inter (Google Fonts)
- **Font Weights:** 300, 400, 500, 600, 700

### Layout
- **Container Max Width:** 1200px
- **Responsive Breakpoints:** 768px, 480px
- **Spacing System:** 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem

## 📋 Sayfalar ve Bölümler

1. **Hero Section** - Karşılama ve ana bilgiler
2. **About** - Hakkımda bilgileri ve istatistikler
3. **Experience** - İş deneyimi timeline
4. **Skills** - Teknik beceriler kategoriler halinde
5. **Education** - Eğitim ve sertifikalar
6. **Contact** - İletişim bilgileri ve form

## ⚙️ Kurulum ve Çalıştırma

1. Projeyi klonlayın veya indirin:
```bash
git clone [repository-url]
cd portfolio-website
```

2. Web sunucusu başlatın:
```bash
# Python ile (Python 3.x)
python -m http.server 8000

# Node.js ile (http-server paketini kurun)
npx http-server

# PHP ile
php -S localhost:8000

# Live Server extension ile VS Code'da
# index.html'e sağ tıklayıp "Open with Live Server"
```

3. Tarayıcınızda açın:
```
http://localhost:8000
```

## 🔧 Özelleştirme

### Renkleri Değiştirme
`styles.css` dosyasında `:root` bölümündeki CSS değişkenlerini düzenleyin:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... diğer renkler */
}
```

### İçerik Güncelleme
`index.html` dosyasında ilgili bölümleri düzenleyin:
- Kişisel bilgiler
- Deneyim detayları
- Beceriler listesi
- İletişim bilgileri

### Animasyonları Özelleştirme
`script.js` dosyasında animasyon ayarlarını değiştirin:
- Typing speed
- Scroll animation threshold
- Transition durations

## 📱 Responsive Tasarım

Website tüm cihaz boyutlarında optimize edilmiştir:

- **Desktop:** 1200px+
- **Tablet:** 768px - 1199px
- **Mobile:** 320px - 767px

## 🌟 JavaScript Özellikleri

- **Theme Toggle:** Dark/Light mode geçişi
- **Mobile Navigation:** Hamburger menü
- **Smooth Scrolling:** Yumuşak sayfa geçişleri
- **Scroll Animations:** Görünüme giren öğelerin animasyonu
- **Contact Form:** Email client entegrasyonu
- **Notification System:** Kullanıcı bildirimleri
- **Performance Optimization:** Throttled scroll events

## 📧 İletişim Formu

Form, kullanıcının varsayılan email istemcisini açar ve önceden doldurulmuş email hazırlar. Gerçek bir backend entegrasyonu için form handling kodunu güncelleyebilirsiniz.

## 🎯 SEO ve Performans

- Semantic HTML5 etiketleri
- Meta tags için hazır yapı
- Optimized CSS ve JavaScript
- Fast loading times
- Mobile-first approach

## 🚀 Deployment

### GitHub Pages
1. GitHub'da repository oluşturun
2. Dosyaları upload edin
3. Settings > Pages > Source: Deploy from a branch
4. Branch: main seçin

### Netlify
1. Netlify'da yeni site oluşturun
2. Dosyaları drag & drop edin
3. Otomatik deploy edilir

### Vercel
1. Vercel hesabı oluşturun
2. GitHub repository'sini import edin
3. Otomatik deploy edilir

## 📝 Lisans

Bu proje kişisel kullanım için tasarlanmıştır. Ticari kullanım için lütfen iletişime geçin.

## 👨‍💻 Geliştirici

**Bahadır Perveli**
- Email: bahadirperveli01@gmail.com
- Telefon: +90 530 505 66 48
- Konum: Üsküdar / İstanbul

---

© 2024 Bahadır Perveli. Tüm hakları saklıdır.
