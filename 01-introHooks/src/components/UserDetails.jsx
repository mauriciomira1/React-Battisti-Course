// eslint-disable-next-line react/prop-types
const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <hr />
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Trabalho: {job}</p>
      {age >= 18 && (
        <p>
          <strong>Já pode tirar habilitação!</strong>
        </p>
      )}
    </div>
  );
};

export default UserDetails;
