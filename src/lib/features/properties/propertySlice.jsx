import { createSlice } from '@reduxjs/toolkit';
import hq from '../../../assets/hq.jpg';
import brooks from '../../../assets/brooks.jpg';
import mbiabong from '../../../assets/mbiabong.jpg';
// import lanes from '../../../assets/2lanes.jpg';
// import osongama from '../../../assets/osongama.jpg';
// import house4 from '../../../assets/house4.jpg';
// import house5 from '../../../assets/house5.jpg';

const initialState = {
	properties: [
		{
			id: 1,
			name: 'Spacious office space',
			address: '65 Obio imoh street',
			location: 'Oron road',
			rooms: 3,
			image: hq,
			bath: 1,
			garage: 0,
			price: 'N2,500,000',
			purpose: 'commercial',
			status: 'for letting',
		},
		{
			id: 2,
			name: '3 bedroom apartment',
			address: 'Brooks street',
			location: 'Nwaniba Road',
			rooms: 3,
			image: brooks,
			bath: 3,
			garage: 6,
			price: 'N3,500,000',
			purpose: 'residential',
			status: 'for rent',
		},
		{
			id: 3,
			name: 'Undeveloped land',
			address: '5 Paul Ekpo crescent',
			location: 'Mbiabong Etoi',
			rooms: 0,
			image: mbiabong,
			bath: 0,
			garage: 0,
			price: 'N1,500,000',
			purpose: 'any (residential)',
			status: 'for letting',
		},
		// {
		// 	id: 4,
		// 	name: '1 bedroon apartment',
		// 	address: '5 Paul Ekpo crescent',
		// 	location: 'Osongama Estate',
		// 	rooms: 1,
		// 	image: osongama,
		// 	bath: 1,
		// 	garage: 2,
		// 	price: 'N1,500,000',
		// 	purpose: 'residential',
		// 	status: 'for letting',
		// },
		// {
		// 	id: 5,
		// 	name: 'Office space',
		// 	address: '5 Paul Ekpo crescent',
		// 	location: 'Nsikak Eduok Ave.',
		// 	rooms: 5,
		// 	image: lanes,
		// 	bath: 1,
		// 	garage: 7,
		// 	price: 'Contact for price',
		// 	purpose: 'commercial',
		// 	status: 'for letting',
		// },
	],
	selectedProperty: null,
	isModalOpen: false,
	filteredProperties: [],
};

const propertySlice = createSlice({
	name: 'property',
	initialState,
	reducers: {
		setSelectedProperty: (state, action) => {
			state.selectedProperty = action.payload;
		},
		toggleModal: (state) => {
			state.isModalOpen = !state.isModalOpen;
		},
		filterProperties: (state, action) => {
			state.filteredProperties = state.properties.filter((property) =>
				property.address.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
		filterByPurpose: (state, action) => {
			state.filteredProperties = state.properties.filter(
				(property) => property.purpose === action.payload
			);
		},
		filterByStatus: (state, action) => {
			state.filteredProperties = state.properties.filter(
				(property) => property.status === action.payload
			);
		},
		filterByTitle: (state, action) => {
			state.filteredProperties = state.properties.filter((property) =>
				property.name.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
		filterByRooms: (state, action) => {
			state.filteredProperties = state.properties.filter(
				(property) => property.rooms === action.payload
			);
		},
	},
});

export const {
	setSelectedProperty,
	toggleModal,
	filterProperties,
	filterByPurpose,
	filterByStatus,
	filterByTitle,
	filterByRooms,
} = propertySlice.actions;

export default propertySlice.reducer;
