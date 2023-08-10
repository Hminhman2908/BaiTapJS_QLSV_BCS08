var dssv = [];

var jsonData = localStorage.getItem("DSSV");
console.log("🚀 ~ file: main.js:4 ~ jsonData:", jsonData);
if (jsonData != null) {
  var list = JSON.parse(jsonData);
  console.log("🚀 ~ file: main.js:7 ~ list:", list);
  dssv = list.map((item) => {
    return new SinhVien(
      item.maSv,
      item.tenSv,
      item.email,
      item.matKhau,
      item.diemToan,
      item.diemLy,
      item.diemHoa
    );
  });
  renderHTML(dssv);
}

function themSv() {
  var sv = layThongTinTuForm();
  dssv.push(sv);

  //   localStorage
  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV", jsonData);
  //   renderHTML
  renderHTML(dssv);
}

function xoaSv(id) {
  var index = timViTri(id, dssv);
  dssv.splice(index, 1);

  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV", jsonData);

  renderHTML(dssv);
}

function suaSv(id) {
  var index = timViTri(id, dssv);
  var sv = dssv[index];
  showThongTinTrenForm(sv);
  document.getElementById("txtMaSV").disabled = true;

  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV", jsonData);

  renderHTML(dssv);
}

function capNhatSv() {
  var sv = layThongTinTuForm();
  var index = timViTri(sv.maSv, dssv);
  dssv[index] = sv;

  var jsonData = JSON.stringify(dssv);
  localStorage.setItem("DSSV", jsonData);

  renderHTML(dssv);
}

function reset() {
  var sv = new SinhVien("", "", "", "", "", "", "", "");
  showThongTinTrenForm(sv);
}

function searchSv() {
  var search = document.getElementById("txtSearch").value;
  var result = dssv.filter((item) =>
    item.tenSv.toLowerCase().includes(search.toLowerCase())
  );
  renderHTML(result);
}
