import React, { useState } from "react";
import ReactImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import classes from "./gallery-carousel.module.scss";

export interface GalleryCarouselProps {
	images: ReactImageGalleryItem[];
}

export function GalleryCarousel({ images }: GalleryCarouselProps): JSX.Element {
	const [mouseIsIn, setMouseIsIn] = useState<boolean>(false);

	return (
		<div
			onMouseOver={() => {
				setMouseIsIn(true);
			}}
			onMouseLeave={() => {
				setMouseIsIn(false);
			}}
		>
			<ReactImageGallery
				renderThumbInner={(item) => {
					return (
						<div
							className={classes.thumbnailImage}
							style={{
								backgroundImage: `url(${item.original})`,
							}}
						></div>
						// <img className={classes.thumbnailImage} src={item.original}/>
					);
				}}
				lazyLoad
				useBrowserFullscreen={true}
				showPlayButton={false}
				// autoPlay={true}
				thumbnailPosition="bottom"
				showIndex={true}
				showFullscreenButton={true}
				showNav={true}
				// slideDuration={3}
				showBullets={true}
				items={images.map((image) => {
					return {
						...image,
						thumbnail: image.original,
					};
				})}
				additionalClass={classes.galleryDesktop}
			/>
			<ReactImageGallery
				renderThumbInner={(item) => {
					return (
						<div
							className={classes.thumbnailImage}
							style={{
								backgroundImage: `url(${item.original})`,
							}}
						></div>
						// <img className={classes.thumbnailImage} src={item.original}/>
					);
				}}
				lazyLoad
				useBrowserFullscreen={false}
				showPlayButton={false}
				// autoPlay={false}
				thumbnailPosition="bottom"
				showIndex={true}
				showFullscreenButton={true}
				showNav={true}
				// slideDuration={3}

				items={images.map((image) => {
					return {
						...image,
						thumbnail: image.original,
					};
				})}
				additionalClass={classes.galleryMobile}
			/>
		</div>
	);
}
