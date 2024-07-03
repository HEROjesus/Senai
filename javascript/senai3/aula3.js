document.getElementById("openModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "block";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("modal").style.display = "none";
});

window.addEventListener('click', function(event){
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
