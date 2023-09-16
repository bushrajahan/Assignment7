* The feature of my project
* In my project, there are 9 courses and also there are a select button, price, credit, description, and title, and also contain an image of the relevant course.
* Here, the total credit is 20, so you can select courses within this limit; otherwise, it will show a React toast.

* Here's a section where your selected course Name, total credit hour, remaining credit hour, and total price are shown.

* The State management policy of my project:
* First State: At first, I fetch the data in the App.jsx file, then I declare a state where I set this data and then pass this data to the Cards.jsx component to show the card.
* Second State: Then I declare a state where I store selectedCard and using this state, I map the card and find the price and credit of the user.
* Third State: In this state, I store the remaining credit of the user and also set an initial value of it and pass the stored value to the Partial.jsx component.
* Fourth State: In this state, I also store the value of the total credit the user has selected and pass the stored value to the Partial.jsx component.
* Fifth State: In this state, I store the total price of the user and pass the stored value to the component Partial.jsx.
