import { motion } from 'framer-motion';
import * as React from 'react';
import { connect } from 'react-redux';
import { storeState } from '../../../interfaces/storeInterfaces';

import style from '../../../sass/icons.module.scss';

type CustomProps = {
  className?: string;
  changeNav: (nav: string) => void;
  location?: string;
  currentNav?: string;
};

const CustomElement = (props: CustomProps) => {
  return (
    <div {...props} onClick={() => props.changeNav('custom')}>
      <div
        className={
          props.currentNav === 'custom' ? style.menuSelected : style.menu
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 143.98 248"
          className={style.icon}
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                id="tailoring"
                d="M141.34,64.25,116,55V44a4,4,0,0,0-2.5-3.7l-18.1-7.25-3.5-14A4,4,0,0,0,88,16H84V4a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V16H56a4,4,0,0,0-3.91,3.05l-3.5,14L30.49,40.3A4,4,0,0,0,28,44V55L2.64,64.2A4,4,0,0,0,.14,69l19.5,74.2C15.64,149.35,4,172.1,4,228a4,4,0,0,0,4,4H56v12a4,4,0,0,0,4,4H84a4,4,0,0,0,4-4V232h48a4,4,0,0,0,4-4c0-55.89-11.65-78.64-15.65-84.79L143.84,69A3.94,3.94,0,0,0,141.34,64.25ZM108,46.68V48a4,4,0,0,0,0,8v8a4,4,0,0,0,0,8v8a4,4,0,0,0,0,8v8a4,4,0,0,0,0,8v8a4,4,0,0,0,0,8v8a4,4,0,0,0,0,8v8a4,4,0,0,0,0,8v8a4,4,0,0,0,0,8v8h-8V52a5.54,5.54,0,0,0-.1-1l-2.1-8.41ZM68,8h8v8H68ZM36,192h8v8H36ZM36,46.73l10.2-4.1L44.09,51A3.08,3.08,0,0,0,44,52V184H36V168a4,4,0,1,0,0-8v-8a4,4,0,1,0,0-8v-8a4,4,0,0,0,0-8v-8a4,4,0,0,0,0-8v-8a4,4,0,0,0,0-8V88a4,4,0,0,0,0-8V72a4,4,0,1,0,0-8V56a4,4,0,0,0,0-8ZM80,240H64v-8H80ZM132,224H12c.6-59.2,14.9-77.25,15-77.4a4.1,4.1,0,0,0,.85-3.6l-19-72.5,19.2-7V204a4,4,0,0,0,4,4H48a4,4,0,0,0,4-4V52.5L59.1,24H84.88L92,52.5V180a4,4,0,0,0,4,4h16a4,4,0,0,0,4-4V144.05a3.92,3.92,0,0,0,1,2.55C117.14,146.75,131.39,164.8,132,224Zm-15.9-80.76a5.64,5.64,0,0,0-.15.9V63.78l19.2,7Z"
              />
            </g>
          </g>
        </svg>
        <p className={style.text}>Custom</p>
      </div>
      {props.currentNav === 'custom' && (
        <motion.div layoutId="border" className={style.border} />
      )}
    </div>
  );
};
const mapStateToProps = (state: storeState) => ({
  currentNav: state.path,
});

const Custom = connect(mapStateToProps)(CustomElement);

export { Custom };
