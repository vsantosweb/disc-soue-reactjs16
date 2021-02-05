import React from 'react';
import Login from '../../pages/auth/login';

// import { Container } from './styles';

function InputGroup({ children, ...rest }) {
  return (
    <div>
      <div>
        <div>
          <span>
            <img src={rest.icon} />
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}

export default InputGroup;