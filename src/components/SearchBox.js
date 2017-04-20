/**
 * Created by vbalovnev on 3/29/2017.
 */

import React, {PropTypes} from 'react';
import SearchResults from './SearchResults';
import '../assets/stylesheets/search.css';



const result = [
    {
        item: {
            avatarUrl: 'https://ae01.alicdn.com/kf/HTB1_hNWOpXXXXX9aFXXq6xXFXXXg/Electronic-2014-New-DIY-Kit-SMT-SMD-Component-Welding-Practice-Board-65-53mm.jpg_220x220.jpg',
            name: "1 Free Shipping BGA 10ml AMTECH RMA-223 RMA 223 BGA PCB Flux Paste No-Clean Solder ",
            orders: 100,
            id: 1,
            price: 10
        },
        store: {
            name: "SHENZHEN FENGHUA Electronic Co., Ltd",
            id: "2323",
            stars: 3
        },

    },
    {
        item: {
            avatarUrl: 'https://ae01.alicdn.com/kf/HTB1_hNWOpXXXXX9aFXXq6xXFXXXg/Electronic-2014-New-DIY-Kit-SMT-SMD-Component-Welding-Practice-Board-65-53mm.jpg_220x220.jpg',
            name: "2 Free Shipping BGA 10ml AMTECH RMA-223 RMA 223 BGA PCB Flux Paste No-Clean Solder ",
            orders: 100,
            id: 2,
            price: 10
        },
        store: {
            name: "SHENZHEN FENGHUA Electronic Co., Ltd",
            id: "2323",
            stars: 3
        },

    },
    {
        item: {
            avatarUrl: 'https://ae01.alicdn.com/kf/HTB1_hNWOpXXXXX9aFXXq6xXFXXXg/Electronic-2014-New-DIY-Kit-SMT-SMD-Component-Welding-Practice-Board-65-53mm.jpg_220x220.jpg',
            name: "2 Free Shipping BGA 10ml AMTECH RMA-223 RMA 223 BGA PCB Flux Paste No-Clean Solder ",
            orders: 100,
            id: 23,
            price: 10
        },
        store: {
            name: "SHENZHEN FENGHUA Electronic Co., Ltd",
            id: "2323",
            stars: 3
        },

    },
    {
        item: {
            avatarUrl: 'https://ae01.alicdn.com/kf/HTB1_hNWOpXXXXX9aFXXq6xXFXXXg/Electronic-2014-New-DIY-Kit-SMT-SMD-Component-Welding-Practice-Board-65-53mm.jpg_220x220.jpg',
            name: "2 Free Shipping BGA 10ml AMTECH RMA-223 RMA 223 BGA PCB Flux Paste No-Clean Solder ",
            orders: 100,
            id: 3,
            price: 10
        },
        store: {
            name: "SHENZHEN FENGHUA Electronic Co., Ltd",
            id: "2323",
            stars: 3
        },

    },
    {
        item: {
            avatarUrl: 'https://ae01.alicdn.com/kf/HTB1_hNWOpXXXXX9aFXXq6xXFXXXg/Electronic-2014-New-DIY-Kit-SMT-SMD-Component-Welding-Practice-Board-65-53mm.jpg_220x220.jpg',
            name: "2 Free Shipping BGA 10ml AMTECH RMA-223 RMA 223 BGA PCB Flux Paste No-Clean Solder ",
            orders: 100,
            id: 4,
            price: 10
        },
        store: {
            name: "SHENZHEN FENGHUA Electronic Co., Ltd",
            id: "2323",
            stars: 3
        },

    },
    {
        item: {
            avatarUrl: 'https://ae01.alicdn.com/kf/HTB1_hNWOpXXXXX9aFXXq6xXFXXXg/Electronic-2014-New-DIY-Kit-SMT-SMD-Component-Welding-Practice-Board-65-53mm.jpg_220x220.jpg',
            name: "2 Free Shipping BGA 10ml AMTECH RMA-223 RMA 223 BGA PCB Flux Paste No-Clean Solder ",
            orders: 100,
            id: 5,
            price: 10
        },
        store: {
            name: "SHENZHEN FENGHUA Electronic Co., Ltd",
            id: "2323",
            stars: 3
        },

    },
    {
        item: {
            avatarUrl: 'https://ae01.alicdn.com/kf/HTB1_hNWOpXXXXX9aFXXq6xXFXXXg/Electronic-2014-New-DIY-Kit-SMT-SMD-Component-Welding-Practice-Board-65-53mm.jpg_220x220.jpg',
            name: "2 Free Shipping BGA 10ml AMTECH RMA-223 RMA 223 BGA PCB Flux Paste No-Clean Solder ",
            orders: 100,
            id: 6,
            price: 10
        },
        store: {
            name: "SHENZHEN FENGHUA Electronic Co., Ltd",
            id: "2323",
            stars: 3
        },

    },
    {
        item: {
            avatarUrl: 'https://ae01.alicdn.com/kf/HTB1_hNWOpXXXXX9aFXXq6xXFXXXg/Electronic-2014-New-DIY-Kit-SMT-SMD-Component-Welding-Practice-Board-65-53mm.jpg_220x220.jpg',
            name: "2 Free Shipping BGA 10ml AMTECH RMA-223 RMA 223 BGA PCB Flux Paste No-Clean Solder ",
            orders: 100,
            id: 7,
            price: 10
        },
        store: {
            name: "SHENZHEN FENGHUA Electronic Co., Ltd",
            id: "2323",
            stars: 3
        },

    },
    {
        item: {
            avatarUrl: 'https://ae01.alicdn.com/kf/HTB1_hNWOpXXXXX9aFXXq6xXFXXXg/Electronic-2014-New-DIY-Kit-SMT-SMD-Component-Welding-Practice-Board-65-53mm.jpg_220x220.jpg',
            name: "2 Free Shipping BGA 10ml AMTECH RMA-223 RMA 223 BGA PCB Flux Paste No-Clean Solder ",
            orders: 100,
            id: 8,
            price: 10
        },
        store: {
            name: "SHENZHEN FENGHUA Electronic Co., Ltd",
            id: "2323",
            stars: 3
        },

    }
];


class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (e.key === 'Enter') {
            console.log('do validate');

            this.setState(prevState => ({
                isToggleOn: !prevState.isToggleOn
            }));
        }else {
            console.log('other key');

        }
    }

    render() {
        return (
        <div>

            <div id="aliLogo" className="util-left">
                <a title="www.aliexpress.com" href="http://www.aliexpress.com">www.aliexpress.com</a>
                <p>Smarter Shopping, Better Living</p>
            </div>

            <div>
                <input type="text" name="search" onKeyPress={this.handleClick} placeholder="Search.."/>
            </div>

            <div >
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </div>

            <SearchResults
                items={result}
            />
        </div>

        );
    }
}

function SearchBox1(props) {

    return (
        <div>

            <div id="aliLogo" class="util-left">
                <a title="www.aliexpress.com" href="http://www.aliexpress.com">www.aliexpress.com</a>
                <p>Smarter Shopping, Better Living</p>
            </div>

            <div>
                <input type="text" name="search" placeholder="Search.."/>
            </div>

            <SearchResults
                items={result}
            />
        </div>
    );
}
export default SearchBox;