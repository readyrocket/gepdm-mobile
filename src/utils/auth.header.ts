const generate = (authToken: string) => `Bearer ${authToken}`;

const obj = {
	generate,
};

export default obj;
