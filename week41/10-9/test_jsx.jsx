  var Myhello = React.createClass({
    render: ()=>{
      return(
        // style赋值要用双大括号
        <span className="myspan" style={{color:'red'},{fontSize:30,color:'blue'}}>MyHello</span>
      );
    }
  });

  ReactDOM.render(
    <Myhello />,
    document.getElementById('d')  //  后边不能加分号否则报错，render要接收两个参数，以逗号分隔，不能出现别的符号
  );
