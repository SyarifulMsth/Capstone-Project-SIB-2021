class ProggresTamplte {
  static proggresTempalte(books) {
    const {
      title, publisher, pageCount,
    } = books;
    const containerWihlist = document.querySelector('#proggress-items');
    containerWihlist.innerHTML += `
    <div class='progress-books__items'>

      <div class="proggress-main">
        <h4>${title}</h4>
        <p>${publisher}</p>
         <p>isi halaman : ${pageCount}</p>
         <div id="selamat"></div>
      </div>
      <div class="proggress-user">
        <input type="text" id="buku-dibaca" placeholder="buku yang telah di baca">
        <input type="text" id="jam-perhari" placeholder="berapa jam perhari">
        <button id="btn-inputuser" class="btn-inputuser">klik proggres</button>
        <p>sisa halaman <span id="sisa"></span></p>
        <p>jika membaca <span id="jam"></span> jam perhari maka akan tuntas dalam <span id="minggu"></span> </p>
      </div>  
    </div>

    `;
  }

  static sisaPage(books) {
    const { pageCount } = books;
    const inputBukuDibaca = document.getElementById('buku-dibaca');
    const inputJamPerhari = document.getElementById('jam-perhari');
    const sisaElment = document.getElementById('sisa');
    const jam = document.getElementById('jam');
    // eslint-disable-next-line no-unused-vars
    const minggu = document.getElementById('minggu');
    const buttonProggres = document.querySelectorAll('.btn-inputuser');

    buttonProggres.forEach((button) => {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(event.target.parentElement);
        sisaElment.innerText = pageCount - inputBukuDibaca.value;
        jam.innerText = inputJamPerhari.value;
        minggu.innerText = sisaElment.innerText / inputJamPerhari.value;
        this.finishProggres(sisaElment.innerText);
      });
    });
  }

  static finishProggres(sisaHalaman) {
    const selamat = document.getElementById('selamat');
    if (sisaHalaman <= 0) {
      selamat.innerText = 'selamat anda telah menyelesaikan buku ini';
    } else if (sisaHalaman <= 10) {
      selamat.innerText = 'semangat lagi, sisa halaman tinggal sedikit';
    } else {
      selamat.innerText = 'ayo giat membaca';
    }
  }
}

export default ProggresTamplte;
