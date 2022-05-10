import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DSSanPham extends Component {
  render() {
    return (
      <div className="row">
        {this.props.dssp?.map((sp) => {
          return (
            <SanPham
              key={sp.maSP}
              sanPham={sp}
              onXemChiTietClick={this.props.onXemChiTietClick}
              onChangeSoLuongClick={this.props.onChangeSoLuongClick}
            />
          );
        })}
      </div>
    );
  }
}
