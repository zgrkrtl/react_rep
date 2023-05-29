//Creating and nesting components
//React components are JavaScript functions that return markup:
function MyButton() {
  return <button>I'm a button</button>;
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

//The export default keywords specify the main component in the file.
