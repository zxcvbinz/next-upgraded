// switcher.tsx
import React, { ReactElement } from 'react';
import Switch from './switch'; // Assicurati che questo import corrisponda al tuo percorso effettivo

export default function Switcher({ children }: { children: React.ReactNode }) {
	return (
		<>
			{React.Children.map(children, child => {
				if (React.isValidElement(child) && child.type === Switch) {
					return React.cloneElement(child as ReactElement, { _insideSwitcher: true });
				}
				return child;
			})}
		</>
	);
}
