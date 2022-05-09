import React, { Component } from "react";
import { modelDataPhone } from "../models/modelDataPhone";
import DSSanPham from "./DSSanPham";
import SanPhamChiTiet from "./SanPhamChiTiet";

export default class PhoneDashboard extends Component {
  state = {
    spChiTiet: modelDataPhone[0],
  };

  handleXemChiTiet = (id) => {
    // console.log(id);
    const indexSP = modelDataPhone.findIndex((sp) => sp.maSP === id);

    this.setState({
      spChiTiet: modelDataPhone[indexSP],
    });
  };

  render() {
    return (
      <div className="container d-flex flex-column align-items-center py-5">
        <DSSanPham
          dssp={modelDataPhone}
          onXemChiTietClick={this.handleXemChiTiet}
        />

        <SanPhamChiTiet sanPham={this.state.spChiTiet} />
      </div>
    );
  }
}
