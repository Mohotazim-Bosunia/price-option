import Feature from "../Feature/Feature";


const PriceOption = ({price1}) => {
    const {name,price,features}=price1
    return (
        <div className="bg-emerald-700 text-black rounded-xl p-4 text-center ">
          <h2>
            <span className="text-7xl">{price}</span>
            <span className="text-2xl">/month</span>
          </h2>
          <h4 className="text-3xl">{name}</h4>
          {
            features.map((feature,ids) => <Feature
            key={ids}
            feature={feature}
            ></Feature>)
          }
        </div>
    );
};

export default PriceOption;