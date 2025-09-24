// Diary Save
function saveDiary() {
  let diaryText = document.getElementById("diaryInput").value;
  localStorage.setItem("coupleDiary", diaryText);
  displayDiary();
}

function displayDiary() {
  let saved = localStorage.getItem("coupleDiary");
  if (saved) {
    document.getElementById("savedDiary").innerText = saved;
  }
}

// File Upload Preview
document.getElementById("fileInput").addEventListener("change", function(event) {
  const preview = document.getElementById("preview");
  preview.innerHTML = "";
  Array.from(event.target.files).forEach(file => {
    const reader = new FileReader();
    reader.onload = e => {
      if (file.type.startsWith("image")) {
        const img = document.createElement("img");
        img.src = e.target.result;
        preview.appendChild(img);
      } else if (file.type.startsWith("video")) {
        const video = document.createElement("video");
        video.src = e.target.result;
        video.controls = true;
        preview.appendChild(video);
      }
    };
    reader.readAsDataURL(file);
  });
});

// Days Together
function calculateDaysTogether() {
  const startDate = new Date("2024-04-14");
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("daysTogether").innerText = diffDays + " hari";
}

window.onload = () => {
  displayDiary();
  calculateDaysTogether();
};
