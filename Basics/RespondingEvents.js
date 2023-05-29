function MyButton() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
/*This code creates a button component that, when clicked, 
triggers a function to display an alert message. 
It demonstrates a simple example of handling events in React.*/
