/** src/components/svg/icons/SvgDocGeneric.js */

import React from 'react';

/**
 * Functional component based on Mayflower atoms::icons::svg doc generic
 * https://mayflower.digital.mass.gov/?p=atoms-svg-doc-generic
 */
function SvgDocGeneric() {
    const svgStyle = {
        enableBackground: "new 0 0 35 36"
    };

    const pathStyle = {
        fillRule: "evenodd",
        clipRule: "evenodd"
    };

    const pathStyleTag = "<style type=\"text/css\">.st0{" + {pathStyle} + "}</style>";

    return (
        <svg aria-hidden="true"
             version="1.1"
             id="SvgjsSvg1000"
             xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink"
             x="0px"
             y="0px"
             width="35px"
             height="36px"
             viewBox="0 0 35 36"
             style={svgStyle}
             xmlSpace="preserve">
            {pathStyleTag}
            <g>
                <path className="st0" d="M34.2,13.2H31V8.4c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0
                    c0,0-0.1-0.1-0.1-0.1l-7.6-7.6c0,0,0,0,0,0c0,0-0.1-0.1-0.1-0.1c0,0,0,0-0.1,0c0,0,0,0-0.1,0c0,0-0.1,0-0.1,0c0,0,0,0-0.1,0
                    c0,0-0.1,0-0.1,0h-17C5.3,0,5,0.4,5,0.8v12.4H1.8C1.4,13.2,1,13.6,1,14v7.3c0,0.5,0.4,0.8,0.8,0.8H5v13C5,35.6,5.3,36,5.7,36h24.6
                    c0.4,0,0.8-0.4,0.8-0.8v-13h3.2c0.5,0,0.8-0.4,0.8-0.8V14C35,13.6,34.6,13.2,34.2,13.2z M23.5,2.6l5,5h-5V2.6z M29.5,34.5H6.5V22.2
                    h10.4v-6.9l2.2,0v6.9h10.4V34.5z M29.5,13.2H6.5V1.5H22v6.9c0,0.4,0.3,0.8,0.8,0.8h6.8V13.2z"/>
                <polygon className="st0" points="14.9,25.2 13.3,26.7 16.4,29.8 16.4,29.8 18,31.4 19.6,29.8 22.7,26.7 21.1,25.2 19.1,27.2 19.1,22.2
                    16.9,22.2 16.9,27.2"/>
            </g>
        </svg>
    );
}

export default SvgDocGeneric;