function SinhVien(
  _maSv,
  _tenSv,
  _email,
  _matKhau,
  _diemToan,
  _diemLy,
  _diemHoa
) {
  this.maSv = _maSv;
  this.tenSv = _tenSv;
  this.email = _email;
  this.matKhau = _matKhau;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  this.tinhDTB = function () {
    return (this.diemToan + this.diemLy + this.diemHoa) / 3;
  };
}
