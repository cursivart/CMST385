// JavaScript Document<script>
document.addEventListener('DOMContentLoaded', function() {
  var mascotContainer = document.getElementById('lottieMascot');
  if (!mascotContainer) return; // Don't continue if desktop mascot isn't present

  mascotContainer.style.width = "100px";
  mascotContainer.style.height = "100px";
  var mascotAnim = null;
  const REMOTE_JSON = 'https://cmst385-umgc-cstacy3.azurewebsites.net/project4/imgs/corgi-json/corgi-data.json';
  const GITHUB_RAW = 'https://raw.githubusercontent.com/cursivart/CMST385/main/project4/imgs/corgi-json/corgi-data.json';

  function startLottie(path) {
    mascotAnim = lottie.loadAnimation({
      container: mascotContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: path
    });

    // Pause animation after slide-in
    var totalMs = 2000;
    setTimeout(function() {
      if (mascotAnim) mascotAnim.stop();
      mascotContainer.classList.add('mascot-landing');
    }, totalMs);
  }

  async function tryLoadAnimation() {
    const candidates = ['./corgi-data.json', REMOTE_JSON, GITHUB_RAW];
    for (const url of candidates) {
      try {
        let res;
        try { res = await fetch(url, { method: 'HEAD' }); }
        catch { res = await fetch(url, { method: 'GET' }); }
        if (res && res.ok) { startLottie(url); return; }
      } catch (err) {}
    }
    startLottie('./corgi-data.json');
  }
  tryLoadAnimation();

  // --- rest of your nav overlay/mobile mascot logic below ---
  var overlay = document.getElementById('nav-overlay');
  var navLinks = overlay.querySelectorAll('.bone-link');
  var mascotMobile = document.getElementById('mascotStaticMobile');
  navLinks.forEach(function(link) {
    link.onclick = function() {
      overlay.classList.remove('active');
      if (mascotMobile) mascotMobile.classList.remove('scaled');
    };
  });
  if (mascotMobile) {
    mascotMobile.addEventListener('click', function() {
      var active = overlay.classList.toggle('active');
      if (active) {
        mascotMobile.classList.add('scaled');
      } else {
        mascotMobile.classList.remove('scaled');
      }
    });
  }
  overlay.onclick = function(e) {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      if(mascotMobile) mascotMobile.classList.remove('scaled');
    }
  };
});
	
	document.addEventListener('DOMContentLoaded', function() {
  // Assign a random polygon (from 6 variants) to each grid-box
  var polys = ['poly1','poly2','poly3','poly4','poly5','poly6'];
  var boxes = document.querySelectorAll('.three-col-grid .grid-box');
  boxes.forEach(function(box, i) {
    // Assign polys[i%6] for a 6-shape rotation;
    // or randomize each box with: polys[Math.floor(Math.random()*polys.length)]
    box.classList.add(polys[i%polys.length]);
  });
});
</script>