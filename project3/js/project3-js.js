document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.album').forEach(album => {
    album.addEventListener('click', function() {
      // Remove 'active' and info from all albums
      document.querySelectorAll('.album').forEach(a => {
        a.classList.remove('active');
        const info = a.querySelector('.album-info');
        if (info) info.innerHTML = "";
      });

      // Set this album as active
      this.classList.add('active');

      // Insert album details
      const infoDiv = this.querySelector('.album-info');
      if (infoDiv) {
        infoDiv.innerHTML = `
          <strong>${this.dataset.title || ''}</strong> (${this.dataset.year || ''})<br>
          <em>by ${this.dataset.artist || ''}</em><br>
          ${this.dataset.info || ''}
        `;
      }
    });
  });
});