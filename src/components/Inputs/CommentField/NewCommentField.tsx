import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { Button, Icon, TextField } from '@equinor/eds-core-react';
import { clear } from '@equinor/eds-icons';
import { tokens } from '@equinor/eds-tokens';

import { spacings } from 'src/style';

import styled from 'styled-components';

const { colors } = tokens;

const NewCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacings.large};
  margin-bottom: ${spacings.x_large};
  gap: ${spacings.large};
`;

const CommentTextField = styled(TextField)`
  background: none;

  div:focus-within {
    outline: none;
  }

  input {
    background: none;
    outline: none;
    box-shadow: none;
    color: ${colors.text.static_icons__default.rgba};

    &:focus {
      outline: none;
      box-shadow: inset 0 -2px 0 0 ${colors.interactive.primary__resting.rgba};
    }
  }
`;

const PostButton = styled(Button)`
  width: fit-content;
  margin-left: auto !important;
`;

const ClearButton = styled.div`
  position: absolute;
  right: 1%;
  top: calc(34px / 2);
  color: ${colors.text.static_icons__default.rgba};
  height: 32px;
  width: 32px;
  padding: 5px;
  display: flex;
  place-items: center;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    color: ${colors.interactive.primary__resting.rgba};
    background: ${colors.interactive.primary__hover_alt.rgba};
  }
`;

export interface NewCommentFieldProps {
  placeholder?: string;
  label?: string;
  onPublish: (value: string) => void;
  defaultValue?: string;
}

const NewCommentField: FC<NewCommentFieldProps> = ({
  placeholder,
  label,
  onPublish,
  defaultValue,
}) => {
  const [newComment, setNewComment] = useState(defaultValue ?? '');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewComment(event.target.value);
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.nativeEvent.key === 'Enter') {
      if (newComment !== '') {
        onPublish(newComment);
      }
    }
  };

  const handleClear = () => {
    setNewComment('');
  };

  const handlePublishClick = () => {
    onPublish(newComment);
  };

  return (
    <NewCommentContainer>
      <CommentTextField
        id="newComment"
        placeholder={placeholder}
        autoComplete="off"
        label={label}
        value={newComment}
        autoFocus
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      {newComment.length > 0 && (
        <ClearButton data-testid="clear-button" onClick={handleClear}>
          <Icon
            data={clear}
            size={32}
            color={colors.interactive.primary__resting.rgba}
          />
        </ClearButton>
      )}
      <PostButton
        onClick={handlePublishClick}
        disabled={newComment.length === 0}
      >
        Post Comment
      </PostButton>
    </NewCommentContainer>
  );
};

export default NewCommentField;
