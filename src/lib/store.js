'use client';
import { configureStore } from '@reduxjs/toolkit';
import propertyReducer from './features/properties/propertySlice';

export const makeStore = () => {
	return configureStore({
		reducer: {
			property: propertyReducer,
		},
	});
};
