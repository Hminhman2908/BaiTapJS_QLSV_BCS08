function layThongTinTuForm() {
  var maSv = document.getElementById("txtMaSV").value;
  var tenSv = document.getElementById("txtTenSV").value;
  var email = document.getElementById("txtEmail").value;
  var matKhau = document.getElementById("txtPass").value;
  var diemToan = document.getElementById("txtDiemToan").value * 1;
  var diemLy = document.getElementById("txtDiemLy").value * 1;
  var diemHoa = document.getElementById("txtDiemHoa").value * 1;

  return new SinhVien(maSv, tenSv, email, matKhau, diemToan, diemLy, diemHoa);
}

function renderHTML(list) {
  var contentHTML = "";
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var contentTr = `
    <tr>
        <td>${item.maSv}</td>
        <td>${item.tenSv}</td>
        <td>${item.email}</td>
        <td>${item.tinhDTB()}</td>
        <td>
            <button class="btn btn-warning" onclick="suaSv('${
              item.maSv
            }')"><i class="fa fa-edit"></i></button>
            <button class="btn btn-danger" onclick="xoaSv('${
              item.maSv
            }')"><i class="fa fa-trash" ></i></button></td>
    </tr>
    `;
    contentHTML += contentTr;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function timViTri(id, dssv) {
  //   var viTri;
  //   for (var i = 0; i < dssv.length; i++) {
  //     if (dssv[i].maSv == id) {
  //       viTri = i;
  //     }
  //   }
  //   return viTri;

  return dssv.findIndex((item) => {
    return item.maSv == id;
  });
}

function showThongTinTrenForm(item) {
  document.getElementById("txtMaSV").value = item.maSv;
  document.getElementById("txtTenSV").value = item.tenSv;
  document.getElementById("txtEmail").value = item.email;
  document.getElementById("txtPass").value = item.matKhau;
  document.getElementById("txtDiemToan").value = item.diemToan;
  document.getElementById("txtDiemLy").value = item.diemLy;
  document.getElementById("txtDiemHoa").value = item.diemHoa;
}
