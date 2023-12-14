import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import { tokens } from '@equinor/eds-tokens';

import { motion } from 'framer-motion';
import styled from 'styled-components';

const { spacings } = tokens;

const AnimationWrapper = styled(motion.div)`
  display: flex;
  gap: ${spacings.comfortable.large};
  height: auto;
  flex-direction: column;
  min-height: 30px;
`;
interface AnimateChangeInHeightProps {
  children: ReactNode;
}

export const AnimateChangeInHeight: FC<AnimateChangeInHeightProps> = ({
  children,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | 'auto'>('auto');

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // We only have one entry, so we can use entries[0].
        const observedHeight = entries[0].contentRect.height;
        setHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      style={{ height }}
      animate={{ height }}
      transition={{ duration: 0.3 }}
    >
      <AnimationWrapper ref={containerRef}>{children}</AnimationWrapper>
    </motion.div>
  );
};
