// 여기에 너의 시트 CSV 링크 붙여넣기!
const sheetUrl = "https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/export?format=csv";

fetch(sheetUrl)
  .then(res => res.text())
  .then(csvText => {
    const rows = csvText.trim().split("\n").map(row => row.split(","));

    const lastRow = rows[rows.length - 1];

    // 뒤에서부터 0이 아닌 값 찾기
    let finalValue = "0이 아닌 값 없음";
    for (let i = lastRow.length - 1; i >= 0; i--) {
      const cell = lastRow[i].trim();
      if (cell !== "0" && cell !== "") {
        finalValue = cell;
        break;
      }
    }

    document.getElementById("finalValue").textContent = finalValue;
  })
  .catch(err => {
    console.error("시트 불러오기 오류:", err);
    document.getElementById("finalValue").textContent = "불러오기 실패";
  });
