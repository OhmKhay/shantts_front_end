export function checkLink(url: string) {
  return fetch(url)
    .then(function (response) {
      return response.ok;
    })
    .catch(function () {
      return false;
    });
}
