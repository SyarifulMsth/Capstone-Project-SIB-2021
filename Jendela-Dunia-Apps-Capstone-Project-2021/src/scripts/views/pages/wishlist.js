const Wishlist = {
  async render() {
    return `
      <h2>Wishlist Page</h2>
      <div class="container-wishlist">
        <div id="itemswishlist">
        
        </div>    
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Wishlist;
