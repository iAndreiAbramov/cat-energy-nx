export interface IStrapiImage {
	data: {
		id: number;
		attributes: {
			name: string | null;
			alternativeText: string | null;
			caption: string | null;
			width: number;
			height: number;
			url: string; //'/uploads/rice_500_a212a2d70e.png'
			previewUrl: string | null;
		};
	};
}
