import React, { useContext } from "react";

import Image from "../components/Image";
import { Context } from "../Context";
import { getClass } from "../utils";
import { Link } from "react-router-dom";

function Photos() {
  const { allPhotos, cartItems } = useContext(Context);
  console.log(allPhotos);
  const imageElements = allPhotos.map((img, i) => (
    <Image key={img.id} img={img} className={getClass(i)} />
  ));

  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

  return (
    <>
      <header>
        <Link to="/">
          <h4>로그 아웃</h4>
        </Link>
        <Link to="/cart">
          <i className={`${cartClassName} ri-fw ri-2x`}></i>
        </Link>
      </header>
      <main className="photos">{imageElements}</main>
    </>
  );
}

export default Photos;
