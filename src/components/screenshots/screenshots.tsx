import { Dialog, DialogContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./screenshots.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCircleChevronLeft,
	faCircleChevronRight,
	faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { GalleryCarousel } from "../gallery-carousell/gallery-carousel";
import { useWindowDimensions } from "../hooks/use-window-dimensions";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Screenshots() {
	const screenShots = [
		{
			id: 1,
			img: "/images/pic1.png",
		},
		{
			id: 2,
			img: "/images/pic2.png",
		},
		{
			id: 3,
			img: "/images/pic3.png",
		},
		{
			id: 4,
			img: "/images/pic4.png",
		},
		// {
		// 	id: 5,
		// 	img: "	https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
		// },
	];

	const [model, setModel] = useState<boolean>(false);
	const [selectedImg, setSelectedImg] = useState<string>("");
	const [open, setOpen] = useState<boolean>(false);
	const [slideNumber, setSlideNumber] = useState<number>(0);
	const windowDimensions = useWindowDimensions();
	const mobileView = 800;

	const getImg = (img: string) => {
		setSelectedImg(img);
		setModel(true);
		console.log("WOOOOO");
	};

	// const handleClickOpen = () => {
	// 	setOpen(true);
	// 	// setSlideNumber(selectedImg)
	// };

	// const handleClose = () => {
	// 	setOpen(false);
	// };

	const handleClose = () => {
		setModel(false);
		setSelectedImg("");
	};

	const Transition = React.forwardRef(function Transition(
		props: TransitionProps & {
			children: React.ReactElement<any, any>;
		},
		ref: React.Ref<unknown>,
	) {
		return (
			<Slide
				easing={{
					enter: "cubic-bezier(0.1, 1.5, .8, 1)",
					exit: "ease-out",
				}}
				direction="left"
				ref={ref}
				{...props}
			/>
		);
	});

	const prevSlide = () => {
		slideNumber === 0
			? setSlideNumber(screenShots.length - 1)
			: setSlideNumber(slideNumber - 1);
	};

	const nextSlide = () => {
		slideNumber + 1 === screenShots.length
			? setSlideNumber(0)
			: setSlideNumber(slideNumber + 1);
	};

	const handleOpenModal = (index: any) => {
		setSlideNumber(index);
		setModel(true);
		setOpen(true);
	};

	const Ola = (index: any) => {
		setSlideNumber(index);
	};

	const arrayScreens = screenShots.map((t) => {
		return t.img;
	});

	const lastArrayElementImg = arrayScreens.slice(-1).join(",");

	// console.log(arrayScreens, "<<<TEST1");
	// console.log(lastArrayElementImg, "<<<TEST");

	// console.log(screenShots[slideNumber].img, screenShots.slice(-1));
	// console.log(selectedImg, lastArrayElementImg, "<<<<< SELECTED IMG");

	// console.log(arrayScreens[0], "FIRST ELEMENT");

	useEffect(() => {
		// document.addEventListener("keydown",handleKeyDownRight,true)
		// document.addEventListener("keydown",handleKeyDownLeft,true)
		// document.addEventListener("keydown", handleKeyDown, true);
	}, []);

	// const handleKeyDownRight = (e: any) =>{
	// 	if(e.key === "ArrowRight"){
	// 		slideNumber + 1 === screenShots.length
	// 		? setSlideNumber(0)
	// 		: setSlideNumber(slideNumber + 1);
	// 		console.log("KEY" , e.key)

	// 	}
	// }

	// const handleKeyDownLeft = (e: any) =>{
	// 	if(e.key === "ArrowLeft"){
	// 		slideNumber === 0
	// 		? setSlideNumber(screenShots.length - 1)
	// 		: setSlideNumber(slideNumber - 1);
	// 		console.log("KEY" , e.key)
	// 	}
	// }

	const handleKeyDown = (event: React.KeyboardEvent<HTMLImageElement>) => {
		// if (event.key === "ArrowRight") {
		// 	nextSlide();
		// 	console.log("KEY", event.key);
		// }

		if (event.key === "ArrowRight") {
			handleClose();
		}
	};

	console.log(screenShots[slideNumber].img, "PUK");

	console.log(arrayScreens[0], " KAKKAKAAKKA");

	return (
		<div className={classes.screenshotMainContainer}>
			{/* <GalleryCarousel
				images={
					screenShots?.map((file) => {
						return { original: file.img };
					}) || []
				}
			/> */}
			{/* {
          screenShots && screenShots.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.img} alt='' />
              </div>
            )
          })
        } */}

			{model === true ? (
				<Dialog
					open={open}
					onClose={handleClose}
					// TransitionComponent={Transition}
					className={classes.opop}
					PaperProps={{
						sx: {
							borderRadius: 5,
							maxWidth: "revert",
							width: 1200,
							boxShadow: "none",
							backgroundColor: "transparent",
						},
					}}
				>
					<DialogContent className={classes.popUpBackgroundColor}>
						<div>
							<div className={classes.closeIcon}>
								<CloseIcon
									onClick={() => {
										setModel(false);
										console.log("CLOSED");
									}}
								/>
							</div>
							{/* {
								windowDimensions.width > mobileView ? (
									<img
										className={classes.idk}
										src={screenShots[slideNumber].img}
									/>
								) : (
									<div
										className={classes.test}
										style={{
											backgroundImage: `url(${screenShots[slideNumber].img})`,
										}}
									/>
								)
								// <img
								// 		className={classes.idk}
								// 		src={screenShots[slideNumber].img}
								// 	/>
							} */}

							<img className={classes.idk} src={screenShots[slideNumber].img} />

							{screenShots[slideNumber].img === arrayScreens[0] ? null : (
								<>
									<FontAwesomeIcon
										icon={faCircleChevronLeft}
										className={classes.btnPrev}
										onClick={prevSlide}
										// onKeyDown={handleKeyDownLeft}
									/>
									{/* <FontAwesomeIcon
									icon={faArrowRotateLeft}
									className={classes.btnRestart}
									onClick={()=>{
										handleOpenModal(0)
									}}
									// onKeyDown={handleKeyDownLeft}
								/> */}
								</>
							)}

							{screenShots[slideNumber].img === lastArrayElementImg ? (
								<FontAwesomeIcon
									icon={faArrowRotateLeft}
									className={classes.btnRestart}
									onClick={() => {
										handleOpenModal(0);
									}}
									// onKeyDown={handleKeyDownLeft}
								/>
							) : (
								<>
									<FontAwesomeIcon
										icon={faCircleChevronRight}
										className={classes.btnNext}
										onClick={nextSlide}
										// onKeyDown={handleKeyDownRight}
									/>
								</>
							)}
						</div>
					</DialogContent>
					<DialogContent>
						<div className={classes.popUpAllImgContainer}>
							{screenShots.map((screens, index) => {
								return (
									<div
										key={screens.id}
										onClick={() => {
											handleOpenModal(index);
										}}
										className={classes.eachPopUpListImg}
									>
										<div
											className={
												screenShots[slideNumber].img === screens.img
													? classes.selectedImgInPopUp
													: classes.popUpScreenShots
											}
											style={{
												backgroundImage: `url(${screens.img})`,
											}}
										/>
										{/* <div onClick={()=>{
											handleOpenModal(arrayScreens[0])
								console.log(handleOpenModal(arrayScreens[0]),"BACK TO FIRST IMAGE")
							}}>
								RESTART
							</div> */}
									</div>
								);
							})}
						</div>
					</DialogContent>
				</Dialog>
			) : null}
			<div className={classes.screenShotsContainer}>
				{screenShots.map((screens, index) => {
					return (
						<div
							key={screens.id}
							onClick={() => {
								// getImg(screens.img);
								handleOpenModal(index);
							}}
						>
							<div
								className={classes.screenShots}
								style={{
									backgroundImage: `url(${screens.img})`,
								}}
							/>
						</div>
					);
				})}
			</div>
			{/* <ImageGallery items={screenShots.map((t)=>{
				return t.img
			})} /> */}
		</div>
	);
}

// WITH MODAL IMAGE
// <div className={classes.screenshotMainContainer}>
// 			{/* <img loading="lazy" src={tempimgSrc}/> */}

// 			<div
// 				className={classes.screenShots}
// 				style={{
// 					backgroundImage: `url(${selectedImg})`,
// 				}}
// 			/>

// 			<div className={classes.screenShotsContainer}>
// 				{screenShots.map((screens) => {
// 					return (
// 						<div
// 							key={screens.id}
// 							onClick={() => {
// 								getImg(screens.img);
// 							}}
// 						>
// 							<div
// 								className={classes.screenShots}
// 								style={{
// 									backgroundImage: `url(${screens.img})`,

// 								}}
// 							/>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>

// WITHOUT MODAL IMAGE

// <div className={classes.screenshotMainContainer}>
// 			{/* <img loading="lazy" src={tempimgSrc}/> */}

// 			<div className={classes.screenShotsContainer}>
// 				{screenShots.map((screens) => {
// 					return (
// 						<div key={screens.id}>
// 							<div
// 								className={classes.screenShots}
// 								style={{
// 									backgroundImage: `url(${screens.img})`,
// 								}}
// 							/>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>

// {model &&
// 	<div className='sliderWrap'>
// 	  {/* <FontAwesomeIcon icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  /> */}
// 	  <FontAwesomeIcon icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
// 	  <FontAwesomeIcon icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
// 	  <div className='fullScreenImage'>
// 		<img src={screenShots[slideNumber].img} alt='' />
// 	  </div>
// 	</div>
//   }
