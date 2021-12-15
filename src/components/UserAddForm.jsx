import React from 'react';
import './UserAddForm.css';
class UserAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            isGoldClient: false
        };
    }

    updateName(event) {
        this.setState({name: event.target.value});
    }

    updateEmail(event) {
        this.setState({email: event.target.value});
    }

    updateIsGoldClient(event) {
        this.setState({isGoldClient: event.target.checked});
    }

    render() {
        const {name, email, isGoldClient} = this.state;

        return (
            <form
                className="user-add-form"
                onSubmit={(event) => (
                    (this.state.name.length > 1) && (this.state.email.includes('@')) ?
                        this.props.submitAddForm(event, name, email, isGoldClient):
                        alert("Introduceti adresa de email/numele corect!")
                        )}
            >
                <h2>Adauga utilizatori:</h2>
                <label htmlFor="name">Nume:</label>
                <input className='nameInput'
                    type="text"
                    name="name"
                    onChange={(event) => this.updateName(event)}
                />
                <label htmlFor="email">Email:</label>
                <input className='emailInput'
                    type="text"
                    name="email"
                    onChange={(event) => this.updateEmail(event)}
                />
                <label htmlFor="is-gold-client">Client GOLD</label>
                <input
                    type="checkbox"
                    name="is-gold-client"
                    value="true"
                    onChange={(event) => this.updateIsGoldClient(event)}
                />

                <input className="submitInput" type="submit" value="Introduceti utilizatorul"/>
            </form>
        )
    }
}

export default UserAddForm;