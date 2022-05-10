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
    const dssp = modelDataPhone.map((sp) => ({ ...sp, soLuong: 0 }));

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
        return { ...sp, soLuong: sp.soLuong + giaTri };
      } else return { ...sp };
    });

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
          dssp={this.state.dsspDienThoai}
          onXemChiTietClick={this.handleXemChiTiet}
          onChangeSoLuongClick={this.handleChangeSoLuong}
        />

        <SanPhamChiTiet sanPham={this.state.spChiTiet} />
      </div>
    );
  }
}
