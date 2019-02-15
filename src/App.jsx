import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    //set default state
    this.state = {
      userList: [
        {
          name: 'Roslee',
          age: 21,
          occupation: 'Student'
        },
        {
          name: 'Pat',
          age: 20,
          occupation: 'Student'
        }
      ],
      user: { //json objects used to store objects bago ipush sa userlist na state
        name: '',
        age: '',
        occuaption: '',
      }
    }
  }


    //add function bindings
  

    //add event handlers
    handleChangeInfo = e => {

      //console.log('Event');
      //console.log(e);
      const {name, value} = e.target;

      //ilalagay sa user na object
      this.setState((prevState) => ({
        user: {
          ...prevState.user,  //spread operator-to spread out values kesa buong object yung ilalagay nya
          [name] : value
        }
      }));
    }

    handleAddUser = e => {

      console.log('Passed handle and user');
      
      console.log('USERLIST');
      console.log(this.state.userList);
      
      console.log('USER');
      console.log(this.state.user);

      let user = this.state.user;
      let userList = [...this.state.userList];//spread operator is passed by value, pag di nagspread magiging passed by reference
      userList.push(user);

      console.log(this.state.userList);

      this.setState({userList : userList});//para maupdate yung table

      e.preventDefault();
    }
    
//index is a parameter
    deleteUser = index => {
      let userList = [...this.state.userList];
      userList.splice(index, 1); //kinukuha yung index nung idedelete sa userlist para hindi kung ano ano yung madelete
      this.setState({userList : userList}); //para magrerender or maupdate yung state
    }

  
  render() {

    let userList = this.state.userList; //user-temporary object
    let user = this.state.user; 

    // console.log('USERS')
    // console.log(this.state.userList)
    return (
      <div className="App">

      <div className='forms-panel'>
        <form> 
          {/* //onchange para habang tinatype binabato na nya sa object na user */}

          Name: <br/> <input type= 'text ' name='name' placeholder='Name' onChange={this.handleChangeInfo}/> <br></br>
          Age: <br/> <input type= 'text ' name='age' placeholder='Age' onChange={this.handleChangeInfo} /> <br></br>
          Occupation: <br/> <input type= 'text ' name='occupation' placeholder='Occupation' onChange={this.handleChangeInfo}/> <br></br>

          <button type='button' onClick= {this.handleAddUser}> Add User</button> <br></br>
        </form>

      </div>


      <div className='table-panel'>
      
      </div>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <th className= 'user-cell'> NAME</th>
              <th className= 'user-cell'> AGE</th>
              <th className= 'user-cell'> OCCUPATION</th>
            </tr>
            {
              userList.map((user, index) => {
                return (
                  <tr className='user-row'>
                    <td className='user-cell'> {user.name} </td>
                    <td className='user-cell'> {user.age} </td>
                    <td className='user-cell'> {user.occupation} </td>
                    <td className='user-cell'> 
                      <button type='button' onClick={() => this.deleteUser(index)} >DELETE USER</button>
                     </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
