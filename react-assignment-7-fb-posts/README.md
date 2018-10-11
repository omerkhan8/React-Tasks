# Live Preview

[facebook posts component](http://my-fb-post.firebaseapp.com)


## React Assignment 7

## Facebook Posts:

Develop a facebook post component!
That will take a prop as an object
{ 
createdBy: 'Somebody's name'
avatar: 'Somebody profile picture url'
description: "I'm not feeling good today!",
images: ['something.com/abc.jpg', ''something.com/xyz.jpg'']
createdAt: Date.now(),
likes: [list of user names for now],
}
develop the component to use these fields with the same design as facebook posts or think for another unique and stunning design. 
Show the Likes/Reactions as they are in facebook, for example if you are also in the `likes` list, it should show `You, Farhaad & 20 others`
Clicking the likes will toggle yourself from the likes list.

On hovering the LIKES, it should show the REACTIONS, as they are in fb
* Use https://github.com/asfandiyark7/react-facebook-emoji for Emojis

If the images are provided in the object, it should show images as in fb
* Use https://github.com/Expertizo/react-fb-image-grid for facebook grid images...

Show the dates/time in the same format
* Use momentJs to show convert and show the time in these formats: Just Now, 24 hrs, 5 days

What else left after above things, we'll implement in future assignments!
This will enable you to provide your components to other developers, they'll just need to add an object and magically your component will return a facebook post feature! 
Basically I'm moving you guys to develop a library!
