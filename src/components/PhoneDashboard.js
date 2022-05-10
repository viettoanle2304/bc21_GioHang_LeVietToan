import React, { Component } from "react";
import { modelDataPhone } from "../models/modelDataPhone";
import DSSanPham from "./DSSanPham";
import ModalSanPham from "./ModalSanPham";
import SanPhamChiTiet from "./SanPhamChiTiet";

export default class PhoneDashboard extends Component {
  state = {
    dsspDienThoai: [],
    spChiTiet: modelDataPhone[0],
  };

  componentDidMount() {
    const dssp = modelDataPhone.map((sp) => ({ ...sp, soLuong: 0, newAdd: 0 }));

    // console.log(dssp);
    this.setState({
      dsspDienThoai: dssp,
    });
  }

  handleXemChiTiet = (id) => {
    // console.log(id);
    const indexSP = this.state.dsspDienThoai.findIndex((sp) => sp.maSP === id);

    this.setState({
      spChiTiet: this.state.dsspDienThoai[indexSP],
    });
  };

  handleChangeSoLuong = (idSP, giaTri) => {
    const dssp = this.state.dsspDienThoai.map((sp) => {
      if (sp.maSP === idSP) {
        if (sp.soLuong + giaTri > 0) {
          return { ...sp, soLuong: sp.soLuong + giaTri, newAdd: 1 };
        } else return { ...sp, soLuong: sp.soLuong + giaTri, newAdd: 0 };
      } else return { ...sp };
    });

    dssp.sort((a, b) => b.newAdd - a.newAdd);

    this.setState(
      {
        dsspDienThoai: dssp,
      },
      () => console.log(this.state.dsspDienThoai)
    );
  };

  render() {
    return (
      <div className="container d-flex flex-column align-items-center py-3">
        <h1 className="text-success my-3">Bài tập giỏ hàng</h1>
        <ModalSanPham
          dssp={this.state.dsspDienThoai}
          onChangeSoLuongClick={this.handleChangeSoLuong}
        />

        <DSSanPham
          dssp={modelDataPhone}
          onXemChiTietClick={this.handleXemChiTiet}
          onChangeSoLuongClick={this.handleChangeSoLuong}
        />

        <SanPhamChiTiet sanPham={this.state.spChiTiet} />
      </div>
    );
  }
}
