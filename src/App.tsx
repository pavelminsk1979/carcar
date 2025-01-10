import React from 'react';
import { Button } from './components/1button/Button';
import { Image } from './components/image/Image';
import { Icon } from './components/icon/Icon';
import { SizeBlock } from './components/size-block-for-content/SizeBlock';
import { IconImage } from './components/icon-image/IconImage';

function App() {
  return (
    <div>
      <IconImage />

      <SizeBlock />
      <Icon />
      <Button />
      <Image />
    </div>
  );
}

export default App;
