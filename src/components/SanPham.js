import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    return (
      <div className="card mx-2 pt-3 col-sm">
        <img
          className="card-img-top"
          style={{ height: "332px" }}
          src={require(`../assets/${this.props.sanPham.hinhAnh}`)}
          alt="Hinh anh san pham"
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.sanPham.tenSP}</h5>
          <div className="d-flex">
            <button
              className="btn btn-success"
              onClick={() =>
                this.props.onXemChiTietClick(this.props.sanPham.maSP)
              }
            >
              Xem chi tiết
            </button>
            <button className="btn btn-danger mx-2">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
