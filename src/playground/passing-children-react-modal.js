
const layout = (props) => {
  return {
    <div>
      <p>header</p>
      {props.children}
      {/* here, isntead of passing tje name of the prop, you pass in all the children defined when we create the instance*/}
      <p>footer</p>
    </div>
  };
};


// you pass in the children props right here.
ReactDOM.render((
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>this is my page</p>
    </div> </Layout> 
  ), document.getElementById('app'));
