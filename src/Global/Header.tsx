import React from 'react';
import './Global.scss';

class Header extends React.Component <{}, { [key: string]: any }> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <header className={'header-section'}>
                <div className={'container store-header'}>
                    <div className={'c-name'}>Fake Store</div>
                    <div className={'nav'}>
                        <ul className={'nav-list'}>
                            <li className={'link'}>Favourite (0)</li>
                            <li className={'link'}>Cart (0)</li>
                            <li className={'link'}>Login</li>
                        </ul>
                    </div>
                </div>
            </header>
        )

    }
}

export default Header;
