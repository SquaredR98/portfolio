'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

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

	const value = {
		contactFormVisible,
		setContactFormVisible,
		websiteVisible,
		setWebsiteVisible,
	};

	return (
		<EntryStateContext.Provider value={value}>
			{children}
		</EntryStateContext.Provider>
	);
}; 