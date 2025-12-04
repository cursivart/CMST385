    document.addEventListener('DOMContentLoaded', function() {
      var mascotContainer = document.getElementById('lottieMascot');
      if (!mascotContainer) return; // skip if absent
      mascotContainer.style.width = "200px";
      mascotContainer.style.height = "200px";
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
    });