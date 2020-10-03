'use strict';

class Header extends React.Component {
  
  constructor() {
    super()
    this.state = {
      showMobileMenu: false
    };
  }

  changeMenu() {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  }


  render() {
    return (
      <header>
        
        <div className="container">
          <div className="row">
            <Logoblock title="Ariel's Practicing" />
            <Menublock />
            <div className="hamburgerblock">
              <div className="burgurBtn">
                <img alt="menu" className="menu-icon" src="img/menu.png" onClick={this.changeMenu.bind(this)}/>
              </div>
            </div>
            
          </div>
        </div>
        
            <div className="mobilemenu">
              <div id="myLinks" style={{display: this.state.showMobileMenu ? 'block' : 'none' }}>
                <img alt="closebutton" className="close-icon" src="img/button_delete.png" onClick={this.changeMenu.bind(this)}/>
                  <a href="">Item 1</a>
                  <a href="">Item 2</a>
                  <a href="">Item 3</a>
                  <a href="">Item 4</a>
              </div>
            </div>

      </header>  
    ); 
  }
}


function Logoblock(props) {
return (
          <div className="logoblock">
            <div className="logo_title">{ props.title }</div>
            <a href="">
              <img alt="logo" className="logo" src="img/logo.png" />
            </a>
          </div>
);
}         

function Menublock() {
return ( 
          <div className="menublock">
            <ul className="menu">
              <li className="menu-list">
                <a className="menu-font"href="">Item 1</a>
              </li>
              <li className="menu-list">
                <a className="menu-font"href="">Item 2</a>
              </li>

              <li className="menu-list">
                <a className="menu-font"href="">Item 3</a>
              </li>
              <li className="menu-list">
                <a className="menu-font" href="">Item 4</a>
              </li>
            </ul>
          </div>
);
} 


// function Hamburgerblock() {
// return (
//           <div className="hamburgerblock">
//             <div className="burgurBtn">
//               <img alt="menu" className="menu-icon" src="img/menu.png" />
//             </div>
//           </div>
// );
// } 
    

// function Mobilemenu() {
// return (      
//       <div className="mobilemenu">
//         <div id="myLinks">
//           <img alt="closebutton" className="close-icon" src="img/button_delete.png" />
//             <a href="">Item 1</a>
//             <a href="">Item 2</a>
//             <a href="">Item 3</a>
//             <a href="">Item 4</a>
//         </div>
//       </div>
// );
// } 

class Welcome extends React.Component {

  constructor() {
    super()
    this.state = {
      msg: "Welcome Message"
    };
  }

  changeMsg() {
    this.setState({
      msg: "Have a Good Time!"
    });
  }

  render() {
    return (
        <section className="welcome-msg">
          <div className="container">
            <div className="row">
              <div className="msg" onClick={this.changeMsg.bind(this)}>
              { this.state.msg }
              </div>
            </div>
          </div> 
        </section>
    );
  }
} 

class Section extends React.Component {

  constructor() {
    super()
    this.state = {
      extendContent: false
    };
  }

  displayMore() {
    this.setState({
      extendContent: true
    });
  }

  render() {
    return (
      <section className="section2">
          <div className="row">
            <div className="title">
              <h1>{ this.props.title }</h1>
            </div>
          </div>
          <ContentBox1 />
         
          <div className="row">
            <div className="btn" onClick={this.displayMore.bind(this)}>Call to Action</div>
          </div>
         
          <div className="row morebox" style={{display: this.state.extendContent ? 'block' : 'none' }}>
            <div className="max-1200">
              <div className="contentbox">Content Box 5</div>
              <div className="contentbox">Content Box 6</div>
              <div className="contentbox">Content Box 7</div>
              <div className="contentbox">Content Box 8</div>
            </div>
          </div>
      </section>
    );
  } 
}


function ContentBox1() {
return (
  <div className="row">
    <div className="max-1200">
      <div className="contentbox">Content Box 1</div>
      <div className="contentbox">Content Box 2</div>
      <div className="contentbox">Content Box 3</div>
      <div className="contentbox">Content Box 4</div>
    </div>
  </div>
  );
} 

// class CallToAction extends React.Component {
//   render() {
//     return (
//       <div className="row">
//         <div className="btn">{ this.props.title }</div>
//       </div>
//     );
//   }
// } 
      
// function ContentBox2() {
// return (
//   <div className="row morebox">
//     <div className="max-1200">
//       <div className="contentbox">Content Box 5</div>
//       <div className="contentbox">Content Box 6</div>
//       <div className="contentbox">Content Box 7</div>
//       <div className="contentbox">Content Box 8</div>
//     </div>
//   </div>
// );
// } 


function App() {
  return (
    <div>
      <Header />
      <content>
        <Welcome />
        <Section title="Section Title" />
      </content>
    </div>
  );
}


const domContainer = document.querySelector('#root');
ReactDOM.render(<App />, domContainer);
