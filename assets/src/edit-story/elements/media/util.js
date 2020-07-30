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
import { css } from 'styled-components';

export const mediaWithScale = css`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  left: ${({ offsetX }) => `${-offsetX}px`};
  top: ${({ offsetY }) => `${-offsetY}px`};
`;

export function getMediaWithScaleCss({ width, height, offsetX, offsetY }) {
  // todo@: This is a complete duplication of `mediaWithScale` above. But
  // no other apparent way to execute interpolate `mediaWithScale` dynamically.
  return `width:${width}px; height:${height}px; left:${-offsetX}px; top:${-offsetY}px;`;
}

/**
 * Returns a valid srcSet attribute value for the given media resource.
 *
 * @param {Object} resource The resource.
 * @return {?string} The srcSet value, or null if the resource has no `sizes`
 * attribute.
 */
export function calculateSrcSet(resource) {
  if (!resource.sizes) {
    return null;
  }

  // The 'thumbnail' sizes attribute is cropped, we don't want that.
  const filteredSizes = {
    ...resource.sizes,
  };
  delete filteredSizes.thumbnail;

  return Object.values(filteredSizes)
    .sort((s1, s2) => s2.width - s1.width)
    .map((s) => `${s.source_url} ${s.width}w`)
    .join(',');
}
