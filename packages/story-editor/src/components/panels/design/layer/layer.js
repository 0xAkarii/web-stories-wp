/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { __ } from '@googleforcreators/i18n';
import {
  Button,
  BUTTON_TYPES,
  Icons,
  themeHelpers,
} from '@googleforcreators/design-system';
import { useRef, memo } from '@googleforcreators/react';
import { getDefinitionForType } from '@googleforcreators/elements';
import { LayerText } from '@googleforcreators/element-library';

/**
 * Internal dependencies
 */
import StoryPropTypes from '../../../../types';
import { useStory } from '../../../../app';
import useCORSProxy from '../../../../utils/useCORSProxy';
import usePerformanceTracking from '../../../../utils/usePerformanceTracking';
import { TRACKING_EVENTS } from '../../../../constants';
import Tooltip from '../../../tooltip';
import useLayerSelection from './useLayerSelection';
import { LAYER_HEIGHT } from './constants';

const ActionsContainer = styled.div`
  position: absolute;
  display: none;
  align-items: center;
  height: 100%;
  top: 0;
  right: 0;
  padding-right: 6px;
  column-gap: 6px;

  --background-color: ${({ theme }) => theme.colors.bg.secondary};
  --background-color-opaque: ${({ theme }) =>
    rgba(theme.colors.bg.secondary, 0)};
  background-color: var(--background-color);

  ::before {
    position: absolute;
    content: '';
    width: 32px;
    height: 100%;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      to right,
      var(--background-color-opaque),
      var(--background-color)
    );
    pointer-events: none;
  }
`;

const LayerContainer = styled.div.attrs({
  // Because the layer panel is aria-hidden, we need something else to select by
  'data-testid': 'layer-option',
})`
  position: relative;
  height: ${LAYER_HEIGHT}px;
  width: 100%;
  overflow: hidden;

  :is(:hover, :focus-within) ${ActionsContainer} {
    display: inline-flex;
  }
`;

const LayerButton = styled(Button).attrs({
  type: BUTTON_TYPES.PLAIN,
  tabIndex: -1,
  role: 'option',
})`
  position: relative;
  display: grid;
  grid-template-columns: 36px 1fr;

  border: 0;
  padding: 0;
  background: transparent;
  height: 100%;
  width: 100%;
  overflow: hidden;
  align-items: center;
  user-select: none;
  border-radius: 0;
  padding-left: 12px;
  transition: revert;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.colors.interactiveBg.tertiaryPress};
      + * {
        --background-color: ${theme.colors.interactiveBg.tertiaryPress};
        --background-color-opaque: ${rgba(
          theme.colors.interactiveBg.tertiaryPress,
          0
        )};
        --selected-hover-color: ${theme.colors.interactiveBg.tertiaryHover};
      }
    `}

  :hover {
    background: ${({ theme }) => theme.colors.interactiveBg.tertiaryHover};
  }
  :hover + * {
    --background-color: ${({ theme }) =>
      theme.colors.interactiveBg.tertiaryHover};
    --background-color-opaque: ${({ theme }) =>
      rgba(theme.colors.interactiveBg.tertiaryHover, 0)};
  }

  :active {
    background: ${({ theme }) => theme.colors.interactiveBg.tertiaryPress};
  }
  :active + * {
    --background-color: ${({ theme }) =>
      theme.colors.interactiveBg.tertiaryPress};
    --background-color-opaque: ${({ theme }) =>
      rgba(theme.colors.interactiveBg.tertiaryPress, 0)};
  }
`;

const LayerIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.fg.primary};
`;

const LayerDescription = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-left: 0;
  text-align: left;
  color: ${({ theme }) => theme.colors.fg.primary};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  right: 0;
  width: 32px;
  aspect-ratio: 1;

  svg {
    position: relative;
    display: block;
    width: 100%;
    color: ${({ theme }) => theme.colors.fg.secondary};
  }
`;

const LayerContentContainer = styled.div`
  margin-right: 8px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const LayerAction = styled(Button).attrs({
  type: BUTTON_TYPES.PLAIN,
  tabIndex: -1,
})`
  position: relative;
  aspect-ratio: 1;
  width: 20px;
  padding: 0;

  /*
   * all of our Icons right now have an embedded padding,
   * however the new designs just disregard this embedded
   * padding, so to accommodate, we'll make the icon its
   * intended size and manually center it within the button.
   */
  svg {
    position: absolute;
    width: 32px;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /*
   * override base button background color so we can receive the
   * proper background color from the parent.
   */
  && {
    transition: revert;
    background: var(--background-color);
  }

  :disabled {
    color: ${({ theme }) => theme.colors.fg.secondary};
  }

  :hover {
    color: var(
      --selected-hover-color,
      ${({ theme }) => theme.colors.fg.secondary}
    );
  }

  & + & {
    margin-left: 4px;
  }

  * {
    pointer-events: none;
  }

  :focus {
    ${({ theme }) =>
      themeHelpers.focusCSS(
        theme.colors.border.focus,
        'var(--background-color)'
      )}
  }
`;

function preventReorder(e) {
  e.stopPropagation();
  e.preventDefault();
}

function Layer({ element }) {
  const { LayerIcon, LayerContent } = getDefinitionForType(element.type);
  const { isSelected, handleClick } = useLayerSelection(element);
  const { isDefaultBackground } = element;
  const {
    duplicateElementsById,
    deleteElementById,
    currentPageBackgroundColor,
  } = useStory(({ actions, state }) => ({
    duplicateElementsById: actions.duplicateElementsById,
    deleteElementById: actions.deleteElementById,
    currentPageBackgroundColor:
      !isDefaultBackground || state.currentPage?.backgroundColor,
  }));

  const { getProxiedUrl } = useCORSProxy();
  const layerRef = useRef(null);
  usePerformanceTracking({
    node: layerRef.current,
    eventData: { ...TRACKING_EVENTS.SELECT_ELEMENT, label: element.type },
  });

  const deleteButtonRef = useRef(null);
  usePerformanceTracking({
    node: deleteButtonRef.current,
    eventData: { ...TRACKING_EVENTS.DELETE_ELEMENT, label: element.type },
  });

  const layerId = `layer-${element.id}`;

  return (
    <LayerContainer>
      <LayerButton
        ref={layerRef}
        id={layerId}
        onClick={handleClick}
        isSelected={isSelected}
      >
        <LayerIconWrapper>
          <LayerIcon
            element={element}
            getProxiedUrl={getProxiedUrl}
            currentPageBackgroundColor={currentPageBackgroundColor}
          />
        </LayerIconWrapper>
        <LayerDescription>
          <LayerContentContainer>
            {element.isBackground ? (
              <LayerText>{__('Background', 'web-stories')}</LayerText>
            ) : (
              <LayerContent element={element} />
            )}
          </LayerContentContainer>
          {element.isBackground && (
            <IconWrapper>
              <Icons.LockClosed />
            </IconWrapper>
          )}
        </LayerDescription>
      </LayerButton>
      <ActionsContainer>
        {element.isBackground ? (
          <LayerAction
            aria-label={__('Locked', 'web-stories')}
            aria-describedby={layerId}
            disabled
          >
            <Icons.LockClosed />
          </LayerAction>
        ) : (
          <>
            <Tooltip
              title={__('Delete Layer', 'web-stories')}
              hasTail
              isDelayed
            >
              <LayerAction
                ref={deleteButtonRef}
                aria-label={__('Delete', 'web-stories')}
                aria-describedby={layerId}
                onPointerDown={preventReorder}
                onClick={() => deleteElementById({ elementId: element.id })}
              >
                <Icons.Trash />
              </LayerAction>
            </Tooltip>
            <Tooltip
              title={__('Duplicate Layer', 'web-stories')}
              hasTail
              isDelayed
            >
              <LayerAction
                aria-label={__('Duplicate', 'web-stories')}
                aria-describedby={layerId}
                onPointerDown={preventReorder}
                onClick={() =>
                  duplicateElementsById({ elementIds: [element.id] })
                }
              >
                <Icons.PagePlus />
              </LayerAction>
            </Tooltip>
          </>
        )}
      </ActionsContainer>
    </LayerContainer>
  );
}

Layer.propTypes = {
  element: StoryPropTypes.element.isRequired,
};

export default memo(Layer);
