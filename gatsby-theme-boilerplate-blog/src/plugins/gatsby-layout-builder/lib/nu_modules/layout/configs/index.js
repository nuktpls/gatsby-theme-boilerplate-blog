const Page__Settings = (pageParams) => {
	let configs = [
		{
			settings: {
				// implementation configs
				wrapperRef: null,
				handleRefState: null,
				refState: null,
				isCarousel: false,
				isModal: false,
				// application configs
				scroll: false,
				resize: false,
				outsideClick: false,
				hasOverlay: false,
				mouseDown: {
					on: false,
					clickElement: '.close-button',
				},
				sliderClass: 'quote',
				bgColor: '#ffffff',
				// isCarousel: false,
				columnWidth: 'full-width-row',
				order: {
					heading: 2,
					paragraph: 1,
					form: 3,
				},
			},
			data: {
				// heading: true || null,
				// paragraph: true || null,
				type: 'QUOTE',
				form: 'dataObj.node.heading' || null,
				fontSize: 10 || null,
				backgroundColor: '#000' || null,
				fontColor: '#fff' || null,
				location: 'home-quote' || null,
			},
		},
	]
	return configs
}

export { Page__Settings }
