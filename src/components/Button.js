import { useContext, useState } from "react";
import { StoreContext } from "../store/StoreContext";

function Button() {
    const { actions } = useContext(StoreContext);
    const [direction, setDirection] = useState('cw');
    const directionsData = {
        cw: {
            label: 'Spin Clockwise',
            animation: 'App-logo-spin-cw',
        },
        ccw: {
            label: 'Spin Counter Clockwise',
            animation: 'App-logo-spin-ccw',
        }
    };

    return (
        <button
            onClick={() => {
                actions.spinLogo(
                    direction === 'cw' ? 'App-logo-spin-ccw' : 'App-logo-spin-cw'
                );
                setDirection(direction === 'cw' ? 'ccw' : 'cw');
            }}
            style={{
                width: 'auto',
                height: 50,
                marginTop: 24,
                fontSize: '0.8em',
                cursor: 'pointer',
            }}
        >
            {directionsData[(direction === 'cw' ? 'ccw' : 'cw')].label}
        </button>
    );
}

export default Button;