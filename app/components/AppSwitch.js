import React, { useState } from 'react';
import { View, Switch } from 'react-native';

export default () => {
  const [isNew, setIsNew] = useState(false);
  return (
    <Switch value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
  );
};
