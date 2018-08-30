# AlMakinah-LevelUp-Entry-Project-Solution

You are required to dynamically build a form using a JSON schema returned from an API.

The api we'll be using is below:

```
https://levelup-assessment-backend-ddmwdsdlta.now.sh/api/
```
You'll find the API documentation [here](https://documenter.getpostman.com/view/3080005/RWTkSKjD#e75e2b23-e565-4289-b84f-da6b60c9142e)

Using this API you'll be able to GET the form input fields along with their types, and use this data to build your form!

Find the detailed instruction below:

1. Use the JSON schema returned from `/getFormSchema` to **DYNAMICALLY** build the form using JS DOM Manipulation
2. Style it using CSS
2. Push your code (solution) to a **PUBLIC** GitHub repo
2. Fill the form with your data (and your newly created repo)
3. Have the form you built submit to the following endpoint of the API by sending its value as a JSON **NOT** a FormData object: 
	`/submission`
3. If you are successful at building the form, you will have a checkbox that marks your submission as the final one, make sure to check it at your latest attempt, as we will not process any submission that is not marked final.
	
	
Then you're done!
	 
**Important:** Static embedding of form inputs into the HTML based on the fetched JSON schema, is not allowed and will be discarded.

&#9400; Omar Doma 2018
