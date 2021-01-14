import React from 'react'
import API from '../../utils/API'

class Table extends React.Component {
    state = {
        root: [],
        employees: [],
        sort: false
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers(){
        API.getRandomUsers()
            .then(res => this.setState({employees: res.data.results}))
            .then(res => this.setState({root: this.state.employees}))
            .then(res => console.log(this.state.employees))
    }

    changeFunction = event => {
        let search = event.target.value;

        let newArray = this.state.root.filter(element => element.name.first.includes(search) || element.name.last.includes(search))
        this.setState({employees: newArray})
    }

    sortByThis=()=>{
        let toBeSorted = this.state.root;
        toBeSorted.sort((elementA, elementB) => {
            let nameA = elementA.name.first.toLowerCase();
            let nameB = elementB.name.first.toLowerCase();

            if(nameA > nameB) {
                return this.state.sort ? 1 : -1;
            }
            if(nameB > nameA) {
                return this.state.sort ? -1 : 1;
            }

            return 0;
        })
        this.setState({sort: !this.state.sort})
        this.setState({employees: toBeSorted})
    }

    render() {

        return (
            <>
            <nav className="navbar navbar-dark bg-dark justify-content-center">
                <form className="form-inline">
                    <input
                    className="form-control mr-sm-2"
                    onChange={this.changeFunction}
                    placeholder="Search by name"
                    />
                </form>
            </nav>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name <button className="btn btn-info" onClick={this.sortByThis}>Sort</button></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(element => (
                        <tr>
                            <td><img src={element.picture.thumbnail} alt={element.name.first} /></td>
                            <td>{element.name.first} {element.name.last}</td>
                            <td>{element.phone}</td>
                            <td>{element.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </>
        )
    }
}

export default Table
