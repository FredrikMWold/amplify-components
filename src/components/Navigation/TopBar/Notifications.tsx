import { FC, ReactNode, useRef, useState } from 'react';

import { Button, Icon, Typography } from '@equinor/eds-core-react';
import { close, notifications as notificationIcon } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';
import { useOutsideClick } from '@equinor/eds-utils';

import { spacings } from 'src/style';

import styled from 'styled-components';

const { colors } = tokens;

interface SidePanelProps {
  $open: boolean;
}

const SidePanel = styled.div<SidePanelProps>`
  height: calc(100vh - 64px);
  width: 320px;
  z-index: 100;
  background-color: ${colors.ui.background__default.rgba};
  position: fixed;
  bottom: 0;
  right: 0;
  overflow: auto;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.14),
    0 3px 4px rgba(0, 0, 0, 0.12);
  display: ${({ $open }) => ($open ? 'initial' : 'none')};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${spacings.small} ${spacings.medium};
  padding-right: ${spacings.small};
  align-items: center;
  margin-bottom: ${spacings.medium};
  border-bottom: 1px solid ${colors.ui.background__medium.rgba};
`;

const NoNotifications = styled.div`
  color: ${colors.text.static_icons__tertiary.rgba};
  text-align: center;
`;

export const UnreadRedDot = styled.div`
  background-color: ${colors.logo.fill_positive.rgba};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  position: absolute;
  right: 7px;
  top: 7px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.14),
    0 3px 4px rgba(0, 0, 0, 0.12);
`;

interface NotificationsProps {
  setAllAsRead: () => void;
  hasUnread?: boolean;
  children?: ReactNode;
}

const Notifications: FC<NotificationsProps> = ({
  children,
  hasUnread = false,
  setAllAsRead,
}) => {
  const sidePanelRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleButtonClick = () => {
    if (notificationsOpen) {
      onClose();
    } else {
      setNotificationsOpen(true);
    }
  };

  const onClose = () => {
    setAllAsRead();
    setNotificationsOpen(false);
  };

  useOutsideClick(sidePanelRef.current, (event) => {
    if (
      notificationsOpen &&
      buttonRef.current !== null &&
      !buttonRef.current?.contains(event.target as Node)
    ) {
      onClose();
    }
  });

  return (
    <>
      <Button
        variant="ghost_icon"
        key="topbar-notifications"
        ref={buttonRef}
        onClick={handleButtonClick}
        data-testid="show-hide-button"
      >
        <Icon
          data={notificationIcon}
          size={24}
          color={colors.interactive.primary__resting.rgba}
        />
        {hasUnread && <UnreadRedDot data-testid="unread-dot" />}
      </Button>
      <SidePanel
        ref={sidePanelRef}
        $open={notificationsOpen}
        data-testid="side-panel"
      >
        <Header>
          <Typography variant="h6" group="heading">
            Notifications
          </Typography>
          <Button variant="ghost_icon" onClick={onClose}>
            <Icon
              data={close}
              color={colors.interactive.primary__resting.rgba}
            />
          </Button>
        </Header>
        {children ? (
          children
        ) : (
          <NoNotifications>No notifications</NoNotifications>
        )}
      </SidePanel>
    </>
  );
};
Notifications.displayName = 'TopBar.Notifications';

export default Notifications;
