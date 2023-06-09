import * as React from "react";
import {Svg} from "./flash";

function Phone(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 48 48"
            {...props}>
            <path fill="none" d="M0 0h48v48H0z" />
            <path d="M40 31c-2.49 0-4.9-.4-7.14-1.14-.69-.22-1.48-.06-2.03.49l-4.4 4.41a30.171 30.171 0 01-13.18-13.17l4.4-4.42c.55-.55.71-1.34.49-2.03C17.4 12.9 17 10.49 17 8c0-1.11-.89-2-2-2H8a2 2 0 00-2 2c0 18.78 15.22 34 34 34 1.11 0 2-.89 2-2v-7c0-1.11-.89-2-2-2zM24 6v20l6-6h12V6H24z" />
        </Svg>
    );
}

export default Phone;
