import React from 'react';

class NewShipment extends React.Component {
    constructor() {
        super();
        this.state = {

        };
        // this.service = new 
    };


    render() {
        return(
            <div>
                <form>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description"></input>
                    </div>
                    <div>
                        <label htmlFor="size">Size</label>
                        <input type="number" name="size"></input>
                    </div>
                    <div>
                        <label htmlFor="weight">Weight</label>
                        <input type="number" name="weight"></input>
                    </div>
                    <div>
                        <label htmlFor="receiver">Receiver</label>
                        <input type="text" name="Receviver"></input>
                    </div>
                </form>
            </div>
        )
    }

}

export default NewShipment;