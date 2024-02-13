import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { css as emotionCss } from '@emotion/react';
import Text from '../atoms/Text';
import theme from '../../styles/theme';
import CardBody from '../molecules/CardBody';
import CardContainer from '../atoms/CardContainer';
import Button from '../atoms/Button';
import Icon from '../atoms/Icon';

/** @jsxImportSource @emotion/react */

function ProfileCard({
  playerName,
  playerTitle,
  imageSrc,
  message,
  editable,
  onSubmit,
  className,
  css,
}) {
  const cssObject = emotionCss({}, css);
  const [editMode, setEditMode] = useState(false);
  const [messageContent, setMessageContent] = useState(message);
  const readonlyContent = (
    <div
      className="p-3"
      css={emotionCss({
        backgroundColor: theme.color.MAFIA_ITEM,
        borderRadius: 5,
      })}
    >
      <Text color={theme.color.MAFIA_WHITE}>{messageContent}</Text>
      {editable && (
        <Button
          className="ms-1"
          onClick={() => {
            setEditMode(true);
          }}
        >
          <Icon variant={theme.fontSize.XS} className="fas fa-pen" />
        </Button>
      )}
    </div>
  );
  const editableContent = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
        setEditMode(false);
        setMessageContent(e.target.message.value);
      }}
    >
      <textarea
        name="message"
        defaultValue={messageContent}
        css={emotionCss({
          backgroundColor: theme.color.MAFIA_ITEM,
          borderColor: theme.color.MAFIA_BACKGROUND,
          borderRadius: 5,
        })}
      />
      <Button className="ms-1" buttonType={theme.buttonType.SUBMIT}>
        <Icon variant={theme.fontSize.XS} className="fas fa-check-circle" />
      </Button>
    </form>
  );

  return (
    <CardContainer css={cssObject} className={className}>
      <CardBody imageSrc={imageSrc} imageWeight={4}>
        <Text color={theme.color.MAFIA_RED}>{`[${playerTitle}]`}</Text>
        <Text color={theme.color.MAFIA_WHITE} variant={theme.fontVariant.H5}>
          {playerName}
        </Text>
        {editMode ? editableContent : readonlyContent}
      </CardBody>
    </CardContainer>
  );
}

ProfileCard.defaultProps = {
  editable: false,
  onSubmit: () => {},
  className: '',
  css: emotionCss({}),
};

ProfileCard.propTypes = {
  playerName: PropTypes.string.isRequired,
  playerTitle: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  editable: PropTypes.bool,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  css: PropTypes.objectOf(emotionCss),
};

export default ProfileCard;
