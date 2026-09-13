import React, { useState } from 'react';
import { AssetPlaceholder, AssetPlaceholderProps } from './AssetPlaceholder.tsx';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  placeholderLabel?: string;
  placeholderSublabel?: string;
  fallbackTitle?: string;
  fallbackCategory?: string;
  iconType?: AssetPlaceholderProps['iconType'];
  aspectRatio?: AssetPlaceholderProps['aspectRatio'];
  containerClassName?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  placeholderLabel,
  placeholderSublabel,
  fallbackTitle,
  fallbackCategory,
  iconType = 'image',
  aspectRatio = 'auto',
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(!src);

  const displayLabel = fallbackTitle || placeholderLabel || 'Preview Coming Soon';
  const displaySublabel = fallbackCategory || placeholderSublabel;

  if (hasError || !src) {
    return (
      <AssetPlaceholder
        label={displayLabel}
        sublabel={displaySublabel}
        iconType={iconType}
        aspectRatio={aspectRatio}
        className={containerClassName || className}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      referrerPolicy="no-referrer"
      loading="lazy"
      className={className}
      {...props}
    />
  );
};
