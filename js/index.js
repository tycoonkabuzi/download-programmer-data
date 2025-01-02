const buttonDownload = document.getElementById("download-data");
const mainData = document.querySelector(".main-data");
const displayData = () => {
  fetch(
    "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php"
  )
    .then((response) => response.json())
    .then((data) => {
      const previewData = document.createElement("div");
      previewData.setAttribute("id", "dane-programisty");
      previewData.innerHTML = `<p>Name: ${data.imie}</p> <p>Surname: ${data.nazwisko}</p>  <p>Job: ${data.zawod}</p>  <p>Company: ${data.firma}</p>`;
      mainData.appendChild(previewData);
    });
};
buttonDownload.addEventListener("click", () => {
  mainData.innerHTML = "";
  displayData();
});
