// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return (
    <div>
      <h2>Este é o título do container</h2>
      {children}
    </div>
  );
};

export default Container;
