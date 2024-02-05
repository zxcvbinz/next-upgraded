// switch.tsx
import React from 'react';

interface SwitchProps {
	children: React.ReactNode;
	visibility: boolean;
	_insideSwitcher?: boolean; // Aggiungi questa prop per la verifica
}

function Switch({ children, visibility, _insideSwitcher }: SwitchProps) {
	if (!_insideSwitcher) {
		console.warn('Switch component should be used within a Switcher component.');
		return null; // oppure gestisci diversamente, ad esempio lanciando un errore
	}

	return <>{visibility && children}</>;
}

export default Switch;
