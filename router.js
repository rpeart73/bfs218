/* BFS218 section router.
   Remembers a student's section choice (this device) and, on return visits,
   sends them straight to their course site. Add ?choose (or ?reset) to this
   page's URL to clear the saved choice and show the two options again. */
(function () {
  var KEY = 'bfs218.section';
  var SITES = {
    async: 'https://rpeart73.github.io/bfs218-async/',
    sync: 'https://rpeart73.github.io/bfs218-sync/'
  };
  var params;
  try { params = new URLSearchParams(location.search || ''); } catch (e) { params = null; }
  var forceChoose = params && (params.has('choose') || params.has('reset'));
  var devParam = params && params.has('dev');
  var devOn = false; try { devOn = localStorage.getItem('bfs218.dev') === '1'; } catch (e) {}

  if (forceChoose) {
    try { localStorage.removeItem(KEY); } catch (e) {}
  } else if (!devParam && !devOn) {
    var saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) {}
    if (saved && SITES[saved]) { location.replace(SITES[saved]); return; }
  }

  // Save the choice when a card is clicked. No preventDefault: the link still navigates.
  function bind() {
    ['async', 'sync'].forEach(function (val) {
      var el = document.querySelector('.card.' + val);
      if (el) el.addEventListener('click', function () {
        try { localStorage.setItem(KEY, val); } catch (e) {}
      });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind);
  else bind();
})();
