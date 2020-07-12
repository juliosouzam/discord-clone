import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background: transparent;

  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover,
  &.active {
    background: var(--quinary);

    > div span {
      color: var(--white);
    }

    > div svg {
      display: inline;
    }
  }

  > div + div svg {
    display: none;
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: 22px;
  height: 22px;
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: 22px;
  height: 22px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 22px;
  height: 22px;

  margin-left: 4px;

  color: var(--symbol);
  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--white);
  }
`;
