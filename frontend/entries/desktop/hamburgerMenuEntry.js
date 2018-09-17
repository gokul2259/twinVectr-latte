require([
    '../baseEntry/index.js',
    'components/hamburgerMenu/index.js'
  ], (baseEntry, HamburgerMobileMenu) => {
    const { initPage } = baseEntry;
    initPage({"mobile-primary-nav": HamburgerMobileMenu});
  });
  