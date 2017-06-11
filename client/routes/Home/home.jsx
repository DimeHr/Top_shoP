import React from 'react'

class Home extends React.Component {
    componentDidMount() {
        function reqListener () {
            console.log(this.responseText);
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("POST", "/api/user", true);
        oReq.setRequestHeader("Content-type", "application/json");
        oReq.send(JSON.stringify({name: 'myName'}));

    }
    render() {
        return (
            <h1>Home page</h1>
        );
    }
}

export default Home
