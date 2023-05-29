const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}

/*
The code you provided exports a React component called Profile that renders a user profile. The profile information is obtained from the user object.

Here's how the code works:

The user object contains the user's name, image URL, and image size, as you defined previously.
The Profile component is defined as a function component. It does not accept any props.
Inside the return statement, the component renders the following elements:
An <h1> heading that displays the user's name. The name is obtained from user.name and inserted between the opening and closing tags of the <h1> element.
An <img> element with the following attributes:
className set to "avatar", which can be used to apply CSS styles to the image if necessary.
src set to user.imageUrl, which specifies the URL of the user's profile image.
alt set to "Photo of " + user.name, which provides an alternative text for the image. 
In this case, it concatenates the string "Photo of " with the user's name.
style is an object that contains inline styles for the image element. 
It sets the width and height properties to user.
imageSize, which determines the dimensions of the image based on the value stored in the imageSize property of the user object.
The Profile component is exported using the export default statement, allowing it to be imported and used in other parts of the application.
Overall, this code snippet defines a React component that renders a user profile with the user's name and profile image, using the data from the user object.

*/
