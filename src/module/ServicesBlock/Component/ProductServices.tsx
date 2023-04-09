import "../style/productServices.style.css"

import ProductLeftTop from "./Product.leftTop"
import ProductRightTop from "./Product.rightTop"
import ProductBottomLeft from "./Product.bottomLeft"
import ProductBottomRight from "./Product.bottomRight"


function ProductServices(): JSX.Element {
    return (
        <div className="productServContent">
            <div className="productServOne ContentRow">
                <div className="productBlock">
                    <ProductLeftTop />
                </div>
                <div className="productBlock">
                    <ProductRightTop />
                </div>
            </div>
            <div className="productServTwo ContentRow">
                <div className="productBlock">
                    <ProductBottomLeft />
                </div>
                <div className="productBlock">
                    <ProductBottomRight />

                </div>
            </div>
        </div>
    )
}

export default ProductServices