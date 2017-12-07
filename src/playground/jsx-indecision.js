// this will include our JSX, which is the react language
//in the terminal, you need to run 'babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch'
// this command is saying that what we write in this folder will be converted into language the browser can inderstand and this is how you do it.
// its actually running what is in, scripts/app.js, but we erite the code in src/script.js
// if you delete the node_modules folder, and want to reinstall the dependencies, you run 'yarn install', then you can rerun the babel command.
console.log('app.js is running');

//JSX - javascript XML: react offers a new way to define templates and work with the
// it is a language extension, allows us to extend   a language
// the browser doesnt understand jsx, so we will use babel to convert it to css


const app = {
  title: 'Indecision Application',
  subtitle: 'a React Practice App',
  options: []
};

// when you use the &&, it is like an if statement with only one option
// the ? : operator is just another way of writing the normal if statement
const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];
const onFormSubmit = (e) => {
  e.preventDefault();
  // here, the target is the form, we call all the elements in the form with the name= 'option', and we ge the value that was passed in.
  // we are simply grabbing th user input
  const option = e.target.elements.option.value
  if (option) {
    app.options.push(option)
    e.target.elements.option.value = '';
    renderToDom();
  }
};

const deleteAll = () => {

  app.options = [];
  renderToDom();
};

const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};


const renderToDom = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p> {app.subtitle} </p>}
      <p>{app.options.length > 0 ? "Here are your options" : "There are no options"}</p>
      <button onClick={makeDecision}>What Do You Want to do?</button>
      <button disabled={app.options.length === 0} onClick={deleteAll}>Remove All Items</button>
      {/* {numbers.map((number) => {
        return <p key={number}> Number: {number}</p>
        })
      } */}
      <ol>
        {app.options.map( (option) => {
          return <li key={option}>{option}</li>
        })
      }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderToDom();
