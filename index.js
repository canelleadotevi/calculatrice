const resultat = document.getElementById("resultat");
const menu_burger =document.querySelector('.menu_burger');
const open =document.getElementById('open');
  menu_burger.addEventListener('click',()=>{
        menu_burger.classList.toggle('active');
        open.classList.toggle('open');
    })

const buttons = document.querySelector(".all_button_box_content");
const historiques = document.querySelector(".historiques");
const showHistorical = document.querySelector(".show_historical");
const historiquesBody = document.querySelector(".historiques_body");
const historiquesTab = [];
buttons.addEventListener("click", (e) => {
  if (e.target.matches(".button")) {
    const buttonText = e.target.innerText;

    if (buttonText === "=") {
      try {
        const inputResultat = resultat.value;
        const r = eval(inputResultat);
        resultat.value = r;
       
        // Stocker l'opération et le résultat dans l'historique
          const operation = `${inputResultat} = ${r}`;
        historiquesTab.push(operation);
        userHistorical();
      } catch {
        resultat.value = " ";
      }
    } else if (buttonText === "clear") {
      resultat.value = resultat.value.slice(0, -1);
    } else if (buttonText === "AC") {
      resultat.value = "";
    } else {
      resultat.value += buttonText;
    }
  }
});
if (historiques) {
  historiques.addEventListener("click", (e) => {
    showHistorical.classList.toggle("show");
  });
}
function userHistorical() {
  if (historiquesBody) {
    historiquesBody.innerHTML = "";
    historiquesTab.forEach((item , index) => {
      const historique_item = document.createElement("div");
      historique_item.setAttribute = ("class", "historique-item");
      historique_item.innerText = `Calcul ${index + 1}:  ${item}`;
      historiquesBody.appendChild(historique_item);
    });
  }
}
