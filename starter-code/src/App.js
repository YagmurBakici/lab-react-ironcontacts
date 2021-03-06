import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Info from "./all-info";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { allContacts: contacts.slice(0, 5) };
  }

  randomContact() {
    /* Dnt frgt!!:The push() method adds one or more elements to the end of an array and returns the new length of the array. */
    this.state.allContacts.push(
      contacts[Math.floor(Math.random() * contacts.length)]
    );
    // floor tam sayı içindi!
    // pour recuperer allcontacts:
    this.setState({ listContacts: this.state.allContacts });
  }

  sortPopularity() {
    this.state.allContacts.sort(function(celebrity1, celebrity2) {
      if (celebrity1.popularity < celebrity2.popularity) return -1;
      if (celebrity1.popularity > celebrity2.popularity) return 1;
      else return 0;
    });
    this.setState({ listContacts: this.state.allContacts });
  }

  sortName() {
    this.state.allContacts.sort(function(celeb1, celeb2) {
      if (celeb1.name < celeb2.name) return -1;
      if (celeb1.name > celeb2.name) return 1;
      else return 0;
    });
    this.setState({ listContacts: this.state.allContacts });
  }

  delete = name => {
    this.state.contacts.splice(name, 1);
    this.setState({ contacts: this.state.contacts });
  };

  render() {
    return (
      <div className="App">
        <h1>Ironhack Contacts</h1>
        {/* bind this'i contacts'taki objelere yani yukardaki thisle bağlıyor */}
        <button onClick={this.randomContact.bind(this)}>
          Add Random Contact
        </button>
        <button onClick={this.sortName.bind(this)}>Sort By Name</button>
        <button onClick={this.sortPopularity.bind(this)}>
          Sort by Popularity
        </button>
        <table>
          <tbody>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
            {this.state.allContacts.map(celebrity => {
              return (
                <Info
                  celebrity={celebrity}
                  delete={() => this.deleteInfo(celebrity.name)}
                  key={celebrity.pictureUrl}
                />
              );
              // bu silme olayını parent'a yazıyoruz çünkü ondan silinicek ve Info satırındaki bilgiler silinicek
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
