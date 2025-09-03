import React, { useRef, useState } from "react";

function NewProduct() {
  const [product, setproduct] = useState({
    pro_name: "",
    pro_des: "",
    pro_price: "",
    pro_qtr: "",
  });
  const dialog = useRef();
  const openDialog = () => dialog.current.showModal();
  const closeDialog = () => dialog.current.close();
  const handleSubmit = (e) => {};
  const handleChange = (e) => {}
  return (
    <>
      <button
        onClick={openDialog}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Add new product
      </button>
      <dialog
        ref={dialog}
        className="rounded-md w-[480px]"
        onClick={(e) => e.target === e.currentTarget && closeDialog()}
      >
        <form className="p-6 onSubmit={handleSubmit} ">
          <h3 className="font-semibold text-xl mb-4"> Add new product</h3>
          <div className="mb4">
            <label>Product name</label>
            <input
              type="text"
              name="ProductName"
              value={product.pro_name}
              onChange={handleChange}
              placeholder="Product name"
              className="w-full p-2 border rounded mt-2"
              required
            />
          </div>
          <div className="mb4">
            <label>Product Description</label>
            <input
              type="text"
              name="ProductDescription"
              value={product.pro_des}
              onChange={handleChange}
              placeholder="Product Description"
              className="w-full p-2 border rounded mt-2"
              required
            />
          </div>
          <div className="mb4">
            <label>Product price</label>
            <input
              type="text"
              name="ProductPrice"
              value={product.pro_price}
              onChange={handleChange}
              placeholder="Product price"
              className="w-full p-2 border rounded mt-2"
              required
            />
          </div>
          <div className="mb4">
            <label>Product quantity</label>
            <input
              type="text"
              name="Productqty"
              value={product.pro_qty}
              onChange={handleChange}
              placeholder="Product quantity"
              className="w-full p-2 border rounded mt-2"
              required
            />
          </div>
          
          <div className="mt-6 text-right space-x-2">
            <button className="rounded border border-gray-200 px-3 py-2 hover:bg-gray-50" onClick={closeDialog}>
                Add product
            </button>

            <button className="rounded border border-gray-200 px-3 py-2 hover:bg-gray-50" onClick={closeDialog}>
                close
            </button>

          </div>
        </form>
      </dialog>
    </>
  );
}

export default NewProduct;
