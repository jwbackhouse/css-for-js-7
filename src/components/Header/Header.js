import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { FAMILIES, QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const leftActionButtons = (
  <>
    <button>
      <Search size={24} />
    </button>
    <button>
      <Menu size={24} />
    </button>
  </>
)

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            {leftActionButtons}
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          {leftActionButtons}
        </DesktopActionGroup>
        <Logo />
        <DesktopButtonGroup>
          <Button>Subscribe</Button>
          <Link color="var(--color-gray-900)">Already a subscriber?</Link>
        </DesktopButtonGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
`;

const DesktopButtonGroup = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    justify-content: space-between;
  }
`;

const Link = styled.a`
  color: var(--color-gray-900);
  font-family: ${FAMILIES.serif};
  font-style: italic;
  font-size: 0.875rem;
`;

export default Header;
