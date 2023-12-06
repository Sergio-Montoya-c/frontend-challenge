import { MediaBanner as MediaBannerProps } from '../useData';
import Button from './Button';
import Image from "next/image";

export interface MediaBannerExtendedProps extends MediaBannerProps {
  style?: React.CSSProperties;
  className?: string;
}

export default function MediaBanner(props: MediaBannerExtendedProps) {
  const {
    img,
    leadingText,
    heading,
    orientation,
    button,
    className,
    style,
  } = props;

  const imageContainer = img && (
    <div className={`relative aspect-square md:aspect-auto ${orientation === 'right' ? 'md:order-1' : ''}`} data-testid="banner-image">
      { img && <Image {...img} alt={img.alt || ""} fill style={{objectFit: 'cover'}} loading='lazy' />}
    </div>
  );

  const contentContainer = (
    <div  className="w-full p-5 md:p-10 md:py-28 lg:px-32 lg:py-40 flex flex-col items-center text-center md:text-left md:items-start bg-stone-200 text-stone-700">
      { leadingText && <h3 className="text-lg mb-3 font-extralight">{leadingText}</h3> }
      { heading && <h2 className=" tracking-wider text-3xl lg:text-5xl leading-tight font-semibold mb-8">{heading}</h2> }
      { button && <Button {...button} />}
    </div>
  )

  return (
    <div style={{...style}} className={`grid md:grid-cols-2 grid-cols-1 container ${className}`} data-testid="media-banner">      
      { imageContainer }
      { contentContainer}
    </div>
  )
}