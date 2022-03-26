import { useContext } from 'react';
import logo from '../logo.svg';
import { StoreContext } from '../store/StoreContext';

function Logo() {
    const { state } = useContext(StoreContext);

    return (
        <img src={logo} className="App-logo" alt="logo"
            style={{
              animation: `${state.spin_cls_dir} infinite 20s linear`,
            }}
        />
    );
}

export default Logo;