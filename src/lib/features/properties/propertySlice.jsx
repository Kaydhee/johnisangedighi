import { createSlice } from '@reduxjs/toolkit';
import house1 from '../../../assets/house1.png';
import house2 from '../../../assets/house2.png';
import house3 from '../../../assets/house3.png';
// import house4 from '../../../assets/house4.jpg';
// import house5 from '../../../assets/house5.jpg';

const initialState = {
	properties: [
		{
			id: 1,
			name: 'tastefully furnished 3 bedroom duplex',
			address: '123 b Line',
			location: 'Ewet housing',
			rooms: 2,
			image: house1,
			bath: 4,
			garage: 3,
			price: 'N8,000,000',
			purpose: 'residential',
			status: 'for sale',
		},
		{
			id: 2,
			name: '4 bedroon bungalow',
			address: '5 Paul Ekpo crescent',
			location: 'Shelter Afrique',
			rooms: 4,
			image: house2,
			bath: 4,
			garage: 3,
			price: 'N10,000,000',
			purpose: 'commercial',
			status: 'for lease',
		},
		{
			id: 3,
			name: '4 bedroon bungalow',
			address: '5 Paul Ekpo crescent',
			location: 'Shelter Afrique',
			rooms: 4,
			image: house3,
			bath: 4,
			garage: 3,
			price: 'N150,000,000',
			purpose: 'residential',
			status: 'for letting',
		},
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
