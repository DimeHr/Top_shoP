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
        oReq.send(JSON.stringify({name: 'myNaasdme'}));

        var oReq1 = new XMLHttpRequest();
        oReq1.addEventListener("load", reqListener);
        oReq1.open("POST", "/api/product", true);
        oReq1.setRequestHeader("Content-type", "application/json");
        oReq1.send(JSON.stringify({name: 'new product'}));

    }
    render() {
        return (
            <h1>Home page</h1>
        );
    }
}

export default Home
