import React from "react";

export const Card = () => {
	return (
		<div className="card m-3" style={{ width: "13rem" }}>
			<img
				className="card-img-top"
				src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARcAAAC1CAMAAABCrku3AAAANlBMVEXMzMyUlJTPz8+SkpLLy8umpqbIyMiYmJjExMSXl5efn5+cnJyioqLCwsKwsLC0tLS5ubmxsbGQjkfaAAAEV0lEQVR4nO3Za3OkKhCAYQFRAS/M//+z2w3oMLlMtuqc2opV7/NhN4yOxrZpWjMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8Z8V3ox++Zl9G//cv9o/ZUxtnH/12bhyPNe7LXxxleqzR5/Fl9M0J7sHuvinBGL1RuV7EtOog5B8vaUm6o1unMtrKyPivTnAbs6mc/trWt1HJkdfRG2NsO5ZQTKkd8VE2nttcfnuMX2ZMfVw2Y9bJ5mBWW0e+jPz7hLHZmX2yi2RX1gQx5iFfSyZo+oz3jMsS0jAWQ7mkNOl1GqeX5E2UT+1hzPT2GHatcRyC2a1GWv4d7GLMYTV7wnid4D62PhnsXC5FL03/byOZF88Kc9XPro7qDuUjr/FZQtjaSA+9hHiviltlt3cX6Fph2bVSLK7miV7guYf1fi83fuvq6DKbGolsJAbZzFM7iGbR9tMs/JXs4Y7nIrq5VC8pu3WUkMWx7bN2+5fkkaoRr4mxpPa1h8Ygu7l9rcRFA3+7VVpuqtuO2aWSBDUcSgI0PsORXXp+I5o06p6uW3bbVduolWU56qzTpLMSK5ePJCeYbhUZmSN1vZgXvd+uTRiZUFOdTEom1JUbMlek6ki6fJwddph2E5byUzHOGqXrBOFW7YuVZTrEKE1MLMnTrrbG5Sw9fVx0lQq6RH3oaayPyczbM1jSIWqUrLaGUbaZ9H5R+12s/L6brKneaJ3ZzywYnZvkTu9nlFwXF+lq9mT2j+kSnCTdc92apCfch7LEzXmwOnzcaCaNa6z3OJr1L/NF+7a25PTy4cP1AGH1UaAca/T1BNZ3hfoGzpKpq+uzonxfX3RjCLWx+XSkUpPVLsnTgnquRFstPndTInE81yOJ0lWFt349EsmYrx8lt1AaGX34nD/uMRpzq8p7kpZOVt9WHLV1sV/1L0qKrnn5YMvnFdfGVybaunwMnL1VXJatJbfmi0yYcLaqXtOkH12k60+hTxgpRKmNNC66kq/Pnu86wZ3iIpdU77xcjKSKbRNkXMviIY/AZRT7cqJld1pNP7Okw23letZ8uarMUFqitud2q4Vaym3N+KQ5oYvGoKuJcXqXfZkuev+7iikPQw/ZoQ/V1tJHngOkLMm2ro3J0tCVbfF17v1yk5aC2r9oZdDeZNRFtkyMrC2IjronYgmdrtHStHVLlGSIHGQ8dG2Wni9tS1O63igNkvTC7ufXfr+HvpKb45raqzbtTuM6m/beIPajaqsL8Ga6zk4zKqx6EGn2ZZ6FuQry3KjTrp5gvVP7cr1Oa03XUl9rtvaujbre1kZXWzrv+jJ6vvDU13WrM+cbupJnbdudqosapal36TiHkw8uXa/yF+lhU//+cXq0p+XpOPoH6hyNm30pVfm41G8eeoL9Vtmi7Ls//Xx6c3INP33evcl7/cvIDf9KAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOA/+wPDOR+4aWGyLwAAAABJRU5ErkJggg=="
				alt="Card image cap"></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nulla et dolor erat. Nunc finibus scelerisque pellentesque.
				</p>
				<div className="d-flex justify-content-center">
					<a
						href="#"
						className="btn btn-primary p-1"
						style={{ width: "8rem" }}>
						Find Out More!
					</a>
				</div>
			</div>
		</div>
	);
};
