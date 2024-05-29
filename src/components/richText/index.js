import React, { useMemo } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';

const RichText = ({ text, urlTarget = 'New Tab', paragraphCustomClasses }) => {
  const target = urlTarget === 'New Tab' ? '_blank' : '';
  const options = useMemo(
    () => ({
      renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
          return (
            <a target={target} rel='noopener noreferrer' href={node.data.uri}>
              {children}
            </a>
          );
        },
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <p className={paragraphCustomClasses}>{children}</p>
        )
      }
    }),
    [paragraphCustomClasses, target]
  );
  const renderedText = documentToReactComponents(text, options);

  return (
    <div data-testid='rich-text' className='rich-text'>
      {renderedText}
    </div>
  );
};

export default RichText;
