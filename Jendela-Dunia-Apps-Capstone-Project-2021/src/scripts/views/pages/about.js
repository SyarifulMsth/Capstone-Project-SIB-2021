const AboutUs = {
  async render() {
    return `
    <aside class="about-us">

        <div class='jd-apps'>
          <h3>Jendela Dunia</h3>
          <p>Jendela Dunia merupakan sebuah aplikasi berbasis web yang dirancang dengan tujuan agar dapat membantu para pengguna dalam meningkatkan minat baca atau tingkat literasi masyarakat Indonesia. Selain itu, dengan adanya fitur dari aplikasi ini dapat membantu para pengguna dalam membangun kebiasaan membaca dengan memantau progress buku yang sedang dibaca per hari.</p>
        </div>
        
        <div class='container-team'>
          
          <div>
            <h4>Dimas Nurhamzah</h4>
            <h5>Pengembang Front-End Web dan Back-End</h5> 
            <p>Mahasiswa Program Studi Sarjana Sistem Komputer dari Institut Teknologi dan Bisnis STIKOM Bali semester 5 yang memiliki kemampuan dan ketertarikan pada bidang Teknologi Informasi, terutama pada kemampuan pemrograman.</p>

            <p class='social-media'>
              <a href="https://github.com/DimasHamzah">
                <i class="fa fa-github" style="font-size:24px"></i>
              </a>
              <a href="https://www.linkedin.com/in/dimas-hamzah-348330204/">
                <i class="fa fa-linkedin" style="font-size:24px">
                </i>
              </a>
            </p>
          </div>
        
          <div>
            <h4>Syariful Musthofa</h4>
            <h5>Pengembang Front-End Web dan Back-End</h5> 
            <p>Mahasiswa Program Studi Sarjana Informatika dari Universitas PGRI Semarang (UPGRIS) semester 5 yang memiliki kemampuan dan ketertarikan pada bidang Teknologi Informasi, terutama pada kemampuan pemrograman.</p>

            <p class='social-media'>
              <a href="https://github.com/SyarifulMsth">
                <i class="fa fa-github" style="font-size:24px"></i>
              </a>
              <a href="https://www.linkedin.com/in/syariful-musthofa/">
                <i class="fa fa-linkedin" style="font-size:24px">
                </i>
              </a>
            </p>
          </div>

      </div>
    
      </aside>    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
