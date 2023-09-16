*The feature of my project
*In my project ,there are 9 coureses and also there are a select button, price ,credit,description and title and also contain an image of the relevant courese 
*Here total credit is 20.so , you can select course within this limit.otherwise ,it will show a react toast.

*here also a section where your selected course Name,total credit hour,remeaning credit hour and total price are shown .

*The State managment policy of my project=>
*in my projec , i declare total 5 state in my project and the way of managing policy are described below=>
*First State: At first i fetch the data in the App.jsx file than i declare a state where i set this data and than pass this data to cards.jsx component to show the card.
*second State: than i declare a state where i store selectedCard and using this state i map the card and find the price and credit of user .
*third State:in this state i store the remeaningcredit of the user and also set a first value of it and pass the stored value to the Partial.jsx component 
*fourth State:in this state , i also store the value of totalCredit user are selected and also pass the stored value to Partial.jsx component
*five State:in this State i store total price of the user and pass the stored value to the componet Partial.jsx 
