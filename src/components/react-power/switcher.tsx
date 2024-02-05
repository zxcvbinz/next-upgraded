import Switch from './switch';
import React from 'react';

export default function Switcher({ children }: { children: (typeof Switch | typeof Switch)[] }) {
	return <>{children}</>;
}
