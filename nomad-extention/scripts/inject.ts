chrome.storage.local.get(['image'], async function (result) {
  if (result.image) {
    document.body.style.backgroundImage = `url(${result.image})`;
    document.body.style.backgroundSize = `200px`;
    document.body.style.backgroundRepeat = `repeat`;
  }
});
