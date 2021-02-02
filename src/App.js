function App() {
  const array = ['foo', 'bar', 'baz'];
  return (
    <ul>
      {array.map(element=>{
        return <li>{element}</li>;
      })}
    </ul>
  );
}

export default App;
