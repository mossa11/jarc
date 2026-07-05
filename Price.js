import product from './product';

function Price() {
    return <>{product.price.toFixed(2)}</>;
}

export default Price;