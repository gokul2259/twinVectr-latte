require([
  '../baseEntry/index.js',
  '../../modules/recentWorks/index.js'
], (baseEntry, ListRecentWorks) => {
  const { initPage } = baseEntry;
  initPage({services1: ListRecentWorks});
});
