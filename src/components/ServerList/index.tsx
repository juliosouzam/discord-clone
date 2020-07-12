import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotifications mentions={6} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={9} />
      <ServerButton mentions={5} />
      <ServerButton hasNotifications />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
