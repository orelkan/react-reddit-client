import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

const defaultExpand = false;
export const ExpandContext = React.createContext(defaultExpand);

export default function ExpandProvider({children}) {
  const [autoExpand, setAutoExpand] = useState(defaultExpand);
  const context = [autoExpand, setAutoExpand];

  return (
    <ExpandContext.Provider value={context}>
      {children}
    </ExpandContext.Provider>
  );
}

ExpandProvider.propTypes = {
  children: PropTypes.any
};

export function useExpand() {
  const [autoExpand, setAutoExpand] = useContext(ExpandContext);
  return [autoExpand, setAutoExpand];
}

