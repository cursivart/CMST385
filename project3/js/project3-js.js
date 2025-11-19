document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.album').forEach(album => {
    album.addEventListener('click', function(e) {

      e.stopPropagation();


      document.querySelectorAll('.album').forEach(a => a.classList.remove('active'));

      this.classList.add('active');
    });
  });


  document.addEventListener('click', function(e) {
    if (!e.target.closest('.album')) {
      document.querySelectorAll('.album.active').forEach(a => a.classList.remove('active'));
    }
  });
});