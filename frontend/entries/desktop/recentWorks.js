require([
  '../baseEntry',
  '../../modules/recentWorks'
], (baseEntry, RecentWorkContainer) => {
  const { initPage } = baseEntry;
  console.log("in init page");
  initPage({services: RecentWorkContainer});
});
