import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';

import { Icon, Typography } from '@equinor/eds-core-react';
import { copy } from '@equinor/eds-icons';

import { colors, spacings } from 'src/atoms/style';

import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  pointer-events: auto;
  width: fit-content;
  &:hover {
    cursor: pointer;
  }
`;

const spawn = keyframes`
  from {
    opacity: 0;
    background: none;
  }

  to {
    opacity: 1;
    background: ${colors.ui.background__light.rgba};
  }
`;

const CopyIcon = styled.div`
  position: absolute;
  padding: ${spacings.xx_small};
  z-index: 1000;
  top: 50%;
  right: calc(${spacings.x_small} * -1);
  transform: translate(100%, -50%);
  animation: ${spawn} 0.25s;
  background: ${colors.ui.background__light.rgba};
  border: 1px solid ${colors.ui.background__medium.rgba};
  border-radius: 2px;
  p,
  svg {
    color: ${colors.interactive.primary__resting.rgba};
  }
  p {
    font-weight: 700;
    margin-top: 2px;
  }
  display: grid;
  grid-template-columns: auto 2.75rem;
  grid-gap: ${spacings.xx_small};
  align-items: center;
`;

type IconText = 'Copy' | 'Copied!';

export interface CopyTextProps {
  textToCopy: string;
  children: ReactNode;
}

const CopyText: FC<CopyTextProps> = ({ children, textToCopy }) => {
  const isMounted = useRef(false);
  const [hovering, setHovering] = useState(false);
  const [iconText, setIconText] = useState<IconText>('Copy');

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setIconText('Copied!');
    setTimeout(() => {
      if (isMounted.current) {
        setIconText('Copy');
      }
    }, 3000);
  };

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Wrapper
      onClick={handleCopy}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    >
      {children}
      {hovering && (
        <CopyIcon>
          <Icon data={copy} size={16} />
          <Typography variant="overline">{iconText}</Typography>
        </CopyIcon>
      )}
    </Wrapper>
  );
};

export default CopyText;
