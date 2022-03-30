# number_dividers

Do you have problems to find dividers from a number?
Here I am to help you.
With this code you can find dividers and their prime numbers. 

Clone the project:
``` git clone https://github.com/daltibamilena/number_dividers ```

Install dependencies:
``` npm install ```

To start server:
``` npm start ```

You can run on console (make sure that the server is running):
``` npm run dividers ```

Or you can make a request to api:
``` curl -XPOST -H "Content-type: application/json" -d '{"number": 45}' 'http://localhost:3000/dividers' ``` 

##### Data format:

~~~json
{
    "number": <NUMBER>
}
~~~

#### Tests :D 

 To run tests:

 ``` npm test ```
