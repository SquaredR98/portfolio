'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface EntryStateContextType {
	contactFormVisible: boolean;
	setContactFormVisible: (visible: boolean) => void;
	websiteVisible: boolean;
	setWebsiteVisible: (visible: boolean) => void;
}

const EntryStateContext = createContext<EntryStateContextType | undefined>(undefined);

export const useEntryState = () => {
	const context = useContext(EntryStateContext);
	if (context === undefined) {
		throw new Error('useEntryState must be used within an EntryStateProvider');
	}
	return context;
};

interface EntryStateProviderProps {
	children: ReactNode;
}

export const EntryStateProvider: React.FC<EntryStateProviderProps> = ({ children }) => {
	const [contactFormVisible, setContactFormVisible] = useState(false);
	const [websiteVisible, setWebsiteVisible] = useState(false);

	// Initialize website visibility from localStorage
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('websiteVisible') === 'true';
			setWebsiteVisible(stored);
		}
	}, []);

	// Update localStorage when website visibility changes
	const handleSetWebsiteVisible = (visible: boolean) => {
		setWebsiteVisible(visible);
		if (typeof window !== 'undefined') {
			localStorage.setItem('websiteVisible', visible.toString());
			// Dispatch custom event to notify Header component
			window.dispatchEvent(new Event('localStorageChange'));
		}
	};

	const value = {
		contactFormVisible,
		setContactFormVisible,
		websiteVisible,
		setWebsiteVisible: handleSetWebsiteVisible,
	};

  return (
		<EntryStateContext.Provider value={value}>
			{children}
		</EntryStateContext.Provider>
	);
}; 