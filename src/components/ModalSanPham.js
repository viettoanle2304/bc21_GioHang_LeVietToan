import React, { Component } from "react";
import "animate.css";
import { giaTriTang, giaTriGiam } from "../utils/constants";

export default class ModalSanPham extends Component {
  state = {
    tongSoLuong: 0,
    isModalOpen: false,
  };

  componentDidUpdate() {
    const tongSoLuong = this.props.dssp.reduce(
      (tong, sp) => tong + sp.soLuong,
      0
    );
    // console.log(tongSoLuong);

    if (tongSoLuong !== this.state.tongSoLuong) {
      this.setState({
        tongSoLuong: tongSoLuong,
      });
    }
  }

  handleModalOpen = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  handleModalClose = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  renderGioHang = () => {
    return this.props.dssp.map((sp) => {
      if (sp.soLuong >= 1) {
        return (
          <tr key={"id-" + sp.maSP}>
            <td>{sp.maSP}</td>
            <td>
              <img
                src={require(`../assets/${sp.hinhAnh}`)}
                alt={sp.tenSP}
                style={{ height: "80px" }}
              />
            </td>
            <td>{sp.tenSP}</td>
            <td>
              <button
                className="btn btn-primary p-0"
                style={{ width: "30px", height: "30px" }}
                onClick={() =>
                  this.props.onChangeSoLuongClick(sp.maSP, giaTriTang)
                }
              >
                +
              </button>
              <span className="mx-1">{sp.soLuong}</span>
              <button
                className="btn btn-primary p-0"
                style={{ width: "30px", height: "30px" }}
                onClick={() =>
                  this.props.onChangeSoLuongClick(sp.maSP, giaTriGiam)
                }
              >
                -
              </button>
            </td>
            <td>{sp.giaBan.toLocaleString("vi-VN")}</td>
            <td>{(sp.giaBan * sp.soLuong).toLocaleString("vi-VN")}</td>
          </tr>
        );
      } else return null;
    });
  };

  renderContent = () => {
    if (this.state.isModalOpen) {
      return (
        <>
          <div
            className=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 98,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(84, 84, 84, 0.8)",
            }}
          ></div>

          <div
            className="animate__animated animate__slideInDown"
            style={{
              position: "absolute",
              top: "5%",
              left: "50%",
              zIndex: "99",
              width: "60vw",
            }}
          >
            <div
              className="bg-white border rounded p-3"
              style={{ position: "relative", left: "-50%" }}
            >
              <h5 className="pb-2">Giỏ hàng</h5>

              <div className="">
                {this.state.tongSoLuong !== 0 ? (
                  <table className="table">
                    <thead>
                      <tr className="font-weight-bold">
                        <td>Mã sản phẩm</td>
                        <td>Hình ảnh</td>
                        <td>Tên sản phẩm</td>
                        <td>Số lượng</td>
                        <td>Đơn giá</td>
                        <td>Thành tiền</td>
                      </tr>
                    </thead>
                    <tbody>{this.renderGioHang()}</tbody>
                  </table>
                ) : (
                  <p className="border-top pt-3 text-danger">
                    Bạn hiện không có sản phẩm trong giỏ hàng
                  </p>
                )}
              </div>

              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-secondary"
                  onClick={this.handleModalClose}
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  render() {
    return (
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleModalOpen}
        >
          Giỏ hàng ({this.state.tongSoLuong})
        </button>

        {this.renderContent()}
      </div>
    );
  }
}

// api
// assets (contains css, images, themes)
// components (/home)
// hooks
// routes
// tests (/home)
// types
// utils
// views (/home)
