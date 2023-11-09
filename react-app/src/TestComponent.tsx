import React from "react";

export class TestComponent extends React.Component {
    render() {
        return (
            <>
                <p>Halo?</p>
                <p>Bruh</p>
                <p>{2+2}</p>
            </>
        )
    }
}

export class TestButton extends React.Component {

    click() {
        console.log("Because fuck you that's why")
    }

    render() {
        return (
            <>
                <button id="button" onClick={this.click}>Aaaa</button>
            </>
        )
    }
}