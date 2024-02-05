import React from 'react';

function Switch({ children, visibility }: { children: React.ReactNode; visibility: boolean }) {
	return <>{visibility && children}</>;
}

export default Switch;
