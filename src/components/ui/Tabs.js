import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext();

export function Tabs({ children, defaultValue }) {
  const [active, setActive] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      <div>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }) {
  return <div className="flex gap-2 mb-4">{children}</div>;
}

export function TabsTrigger({ value, children }) {
  const { active, setActive } = useContext(TabsContext);

  return (
    <button
      onClick={() => setActive(value)}
      className={`px-4 py-2 rounded ${
        active === value ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }) {
  const { active } = useContext(TabsContext);
  return active === value ? <div>{children}</div> : null;
}