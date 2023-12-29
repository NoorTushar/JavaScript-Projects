const sidebar = document.querySelector(".my-sidebar");
const sidebarOpenBtn = document.querySelector("#sidebarOpenBtn");
const sidebarCloseBtn = document.querySelector("#sidebarCloseBtn");

sidebarOpenBtn.addEventListener("click", () => {
  sidebar.style.width = "180px";
  sidebar.style.paddingLeft = "30px";
});

sidebarCloseBtn.addEventListener("click", () => {
  sidebar.style.width = "0px";
  sidebar.style.paddingLeft = "0px";
});
