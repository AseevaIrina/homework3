interface IProps {
    price: number
    discount: number
    isInstallment: boolean
    months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: IProps) => {
    const priceWithDiscount = price - (price / 100 * discount);
    if (isInstallment) {
        console.log(priceWithDiscount / months);
    }
    console.log(priceWithDiscount);
}

totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });