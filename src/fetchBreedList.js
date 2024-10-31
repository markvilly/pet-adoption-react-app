const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const apisRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apisRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`);
  }

  return apisRes.json();
};

export default fetchBreedList;
